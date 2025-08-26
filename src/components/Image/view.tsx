import { ImageProps, Image, Box, keyframes, useTheme } from "@chakra-ui/react";
import { useState, useEffect, useCallback, memo } from "react";
import type { SyntheticEvent } from "react";

// Constants
const ANIMATION_CONSTANTS = {
  FADE_DELAY: 50,
  DEFAULT_TRANSITION: 500,
  SHIMMER_DURATION: 1.5,
} as const;

const SHIMMER_GRADIENT = {
  START: "#f6f7f8",
  MID: "#edeef1",
  END: "#f6f7f8",
} as const;

// Animations
const shimmer = keyframes`
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
`;

// Types
interface ImageLoadingState {
  isLoaded: boolean;
  isLoading: boolean;
  hasError: boolean;
}

interface CustomImageProps
  extends Omit<ImageProps, "transitionDuration" | "onError" | "onLoad"> {
  /** Source URL of the image */
  src: string;
  /** Border radius of the image */
  borderRadius?: string | number;
  /** Shorthand for border radius */
  rounded?: string | number;
  /** Optional low resolution source for progressive loading */
  lowResSrc?: string;
  /** Duration of the fade-in transition in milliseconds */
  transitionDuration?: number;
  /** Optional alt text for accessibility. Required if image is not decorative */
  alt?: string;
  /** Whether the image is decorative (if true, alt text not required) */
  isDecorative?: boolean;
  onError?: (error: string) => void;
  onLoad?: () => void;
}

/**
 * CustomImage - A responsive image component with loading states and animations
 *
 * Features:
 * - Progressive loading with shimmer effect
 * - Fade-in animation
 * - Error handling
 * - Accessibility support
 * - Responsive sizing
 */
const CustomImage = memo(function CustomImage({
  src,
  lowResSrc,
  transitionDuration = ANIMATION_CONSTANTS.DEFAULT_TRANSITION,
  alt,
  isDecorative = false,
  onError,
  onLoad,
  w,
  h,
  width,
  height,
  objectFit = "cover",
  ...props
}: CustomImageProps) {
  // Theme
  const theme = useTheme();

  // State
  const [loadingState, setLoadingState] = useState<ImageLoadingState>({
    isLoaded: false,
    isLoading: true,
    hasError: false,
  });

  // Get final dimensions
  const finalWidth = w || width || "100%";
  const finalHeight = h || height || "100%";

  // Handlers
  const handleImageLoad = useCallback(() => {
    setLoadingState((prev) => ({ ...prev, isLoading: false }));

    // Smooth fade-in transition
    setTimeout(() => {
      setLoadingState((prev) => ({ ...prev, isLoaded: true }));
      onLoad?.();
    }, ANIMATION_CONSTANTS.FADE_DELAY);
  }, [onLoad]);

  const handleImageError = useCallback(
    (_: SyntheticEvent<HTMLImageElement, Event>) => {
      setLoadingState({
        isLoaded: false,
        isLoading: false,
        hasError: true,
      });
      onError?.("Failed to load image");
    },
    [onError],
  );

  // Effects
  useEffect(() => {
    setLoadingState({
      isLoaded: false,
      isLoading: true,
      hasError: false,
    });

    const img = document.createElement("img");
    img.src = src;
    img.onload = handleImageLoad;
    img.onerror = () =>
      handleImageError({} as SyntheticEvent<HTMLImageElement, Event>);

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src, handleImageLoad, handleImageError]);

  // If no alt text is provided and image is not decorative, log a warning in development
  useEffect(() => {
    if (process.env.NODE_ENV === "development" && !isDecorative && !alt) {
      console.warn(
        "CustomImage: Non-decorative images should have alt text for accessibility",
      );
    }
  }, [isDecorative, alt]);

  // Base styles
  const baseImageStyles = {
    opacity: loadingState.isLoaded ? 1 : 0,
    transition: `opacity ${transitionDuration}ms ease-in-out, transform 0.3s ease-in-out`,
  };

  const shimmerStyles = {
    position: "absolute" as const,
    inset: 0,
    background: `linear-gradient(to right, ${SHIMMER_GRADIENT.START}CC 0%, ${SHIMMER_GRADIENT.MID}CC 20%, ${SHIMMER_GRADIENT.END}CC 40%, ${SHIMMER_GRADIENT.END}CC 100%)`,
    backgroundSize: "2000px 100%",
    animation: `${shimmer} ${ANIMATION_CONSTANTS.SHIMMER_DURATION}s linear infinite`,
    zIndex: loadingState.isLoaded ? -1 : 1,
    backdropFilter: "blur(2px)",
  };

  return (
    <Box
      position="relative"
      overflow="hidden"
      width={finalWidth}
      height={finalHeight}
      role={isDecorative ? "presentation" : undefined}
      borderRadius={props.borderRadius || props.rounded || "inherit"}
    >
      <Image
        src={src}
        alt={isDecorative ? "" : alt}
        style={baseImageStyles}
        loading="lazy"
        onLoad={handleImageLoad}
        onError={handleImageError}
        width="100%"
        height="100%"
        objectFit={objectFit}
        transform="scale(1)"
        transition="transform 0.3s ease-in-out"
        _hover={{ transform: "scale(1.02)" }}
        {...(lowResSrc && { blurDataURL: lowResSrc, placeholder: "blur" })}
        {...props}
      />
      {loadingState.isLoading && !loadingState.hasError && (
        <Box {...shimmerStyles} />
      )}
      {loadingState.hasError && (
        <Box
          position="absolute"
          inset={0}
          bg={`${theme.colors.gray[100]}CC`}
          backdropFilter="blur(2px)"
          display="flex"
          alignItems="center"
          justifyContent="center"
          color={theme.colors.gray[500]}
          fontSize="sm"
        >
          Failed to load image
        </Box>
      )}
    </Box>
  );
});

export default CustomImage;
