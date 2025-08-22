import {
  Flex,
  Skeleton,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getExpandedRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React, { CSSProperties } from "react";
import CustomCheckbox from "../Checkbox/view";
import CustomText from "../Text/CustomText";

interface TableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  lastAlignRight?: boolean;
  setSelectAll?: (selectAll: boolean) => void;
  selectAll?: boolean;
  selectedRows?: Set<string>;
  setSelectedRows?: (selectedRows: Set<string>) => void;
  unSelectedRows?: Set<string>;
  setUnSelectedRows?: (unSelectedRows: Set<string>) => void;
  stickyHeader?: boolean;
  lastColumnSticky?: boolean;
  isLoading?: boolean;
  handleSorting?: (column: string) => void;
}

export default function CustomTable<TData, TValue>({
  columns,
  data,
  lastAlignRight = true,
  setSelectAll = () => {},
  selectAll = false,
  selectedRows = new Set(),
  setSelectedRows = () => {},
  unSelectedRows = new Set(),
  setUnSelectedRows = () => {},
  stickyHeader = false,
  lastColumnSticky = false,
  isLoading = false,
  handleSorting,
}: TableProps<TData, TValue>) {
  const modifiedColumns = columns.map((column) => ({
    ...column,
    enableSorting: column.enableSorting ?? false,
  }));

  const table = useReactTable({
    columns: modifiedColumns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      pagination: {
        pageIndex: 0,
        pageSize: data?.length,
      },
    },
    getExpandedRowModel: getExpandedRowModel(),
  });

  const handleSelectAll = (isChecked: boolean) => {
    setSelectAll(isChecked);
    setSelectedRows(new Set<string>());
    setUnSelectedRows(new Set<string>());
  };

  const handleRowSelect = (rowId: string, isChecked: boolean) => {
    if (selectAll) {
      const newRowIds = new Set(unSelectedRows);
      if (!isChecked) {
        newRowIds.add(rowId);
      } else {
        newRowIds.delete(rowId);
      }
      setUnSelectedRows(newRowIds);
    } else {
      const newRowIds = new Set(selectedRows);
      if (isChecked) {
        newRowIds.add(rowId);
      } else {
        newRowIds.delete(rowId);
      }
      setSelectedRows(newRowIds);
    }
  };

  const getBorderRadius = (index: number, total: number) => {
    if (index === 0) return "10px 0 0 10px";
    if (index === total - 1) return "0 10px 10px 0";
    return "unset";
  };

  const isLastColumn = (index: number, totalColumns: number) => {
    return index === totalColumns - 1;
  };

  const getStickyColumnStyle = (
    isLast: boolean,
    isHeader: boolean = false
  ): CSSProperties => {
    if (lastColumnSticky && isLast) {
      return {
        position: "sticky" as const,
        right: 0,
        zIndex: isHeader ? 11 : 1,
        backgroundColor: isHeader ? "black.50" : "white.absolute",
        boxShadow: "-5px 0 5px -5px rgba(0, 0, 0, 0.1)",
      };
    }
    return {};
  };

  const renderTableSkeleton = () => {
    const skeletonRows = 6; // Number of skeleton rows to show
    const skeletonColumns = 6; // Number of skeleton columns to show

    return (
      <Table variant="unstyled" style={{ position: "relative" }}>
        <Thead
          style={
            stickyHeader
              ? {
                  position: "sticky" as const,
                  top: 0,
                  zIndex: 10,
                }
              : {}
          }
        >
          <Tr bg={"white.absolute"} h={"56px"}>
            {Array.from({ length: skeletonColumns }).map((_, id) => {
              const isLast = id === skeletonColumns - 1;
              const columnStyles: CSSProperties = {
                ...getStickyColumnStyle(isLast, true),
              };

              return (
                <Th
                  key={id}
                  p={"16px"}
                  borderRadius={getBorderRadius(id, skeletonColumns)}
                  style={columnStyles}
                >
                  <Flex
                    flexDir={"row"}
                    gap={"8px"}
                    height={"100%"}
                    alignItems={"center"}
                  >
                    <Skeleton height="16px" width="80px" borderRadius="4px" />
                  </Flex>
                </Th>
              );
            })}
          </Tr>
        </Thead>
        <Tbody>
          {Array.from({ length: skeletonRows }).map((_, rowIndex) => (
            <Tr
              key={rowIndex}
              background={rowIndex % 2 ? "white.absolute" : "grey.5"}
              h={"56px"}
            >
              {Array.from({ length: skeletonColumns }).map((_, colIndex) => {
                const isLast = colIndex === skeletonColumns - 1;
                const cellStyles: CSSProperties = {
                  ...getStickyColumnStyle(isLast),
                };

                return (
                  <Td
                    key={colIndex}
                    p="18px 12px"
                    textAlign={
                      colIndex === skeletonColumns - 1 && lastAlignRight
                        ? "right"
                        : "left"
                    }
                    style={cellStyles}
                  >
                    <Skeleton
                      height="16px"
                      width={`${Math.random() * 40 + 60}%`}
                      borderRadius="4px"
                    />
                  </Td>
                );
              })}
            </Tr>
          ))}
        </Tbody>
      </Table>
    );
  };

  return (
    <Flex
      key={data?.length}
      w={"full"}
      flexGrow={1}
      flexDirection="column"
      overflow="auto"
      h={"full"}
      transition="opacity 0.3s ease-out"
      opacity={1}
    >
      {isLoading ? (
        renderTableSkeleton()
      ) : !data || !data?.length ? (
        <Flex w={"full"} h={"full"} alignItems="center" justifyContent="center">
          <CustomText
            stylearr={[14, 20, 500]}
            color={"black.300"}
            textAlign="center"
          >
            No data available
          </CustomText>
        </Flex>
      ) : (
        <Table variant="unstyled" style={{ position: "relative" }}>
          <Thead
            style={
              stickyHeader
                ? {
                    position: "sticky" as const,
                    top: 0,
                    zIndex: 10,
                  }
                : {}
            }
          >
            {table.getHeaderGroups().map((headerGroup, index) => (
              <Tr key={index} bg={"white.absolute"} h={"56px"}>
                {headerGroup.headers.map((column, id) => {
                  const header = headerGroup.headers;
                  const isLastIndex =
                    id === header?.length - 1 && lastAlignRight;
                  const isLast = isLastColumn(id, headerGroup?.headers?.length);

                  const columnStyles: CSSProperties = {
                    width: column.getSize ? column.getSize() : "inherit",
                    ...getStickyColumnStyle(isLast, true),
                  };
                  const isSortingEnabled =
                    column.column.columnDef.enableSorting;

                  return (
                    <Th
                      key={id}
                      p={"16px"}
                      borderRadius={getBorderRadius(
                        id,
                        headerGroup?.headers?.length
                      )}
                      cursor={isSortingEnabled ? "pointer" : "default"}
                      onClick={
                        isSortingEnabled && handleSorting
                          ? () => handleSorting(column.id)
                          : undefined
                      }
                      style={columnStyles}
                      transition="all 0.2s ease-in-out"
                      _hover={{
                        bg: isSortingEnabled ? "grey.50" : "transparent",
                      }}
                    >
                      <Flex
                        flexDir={"row"}
                        gap={"8px"}
                        height={"100%"}
                        alignItems={"center"}
                      >
                        {column.id === "selection" ? (
                          <CustomCheckbox
                            isChecked={selectAll}
                            setIsChecked={handleSelectAll}
                            color={"primary.500"}
                          />
                        ) : (
                          <CustomText
                            stylearr={[12, 20, 500]}
                            color={"black.300"}
                            textTransform="capitalize"
                            textAlign={isLastIndex ? "right" : "inherit"}
                            w="full"
                            className="whitespace-nowrap"
                          >
                            {column.isPlaceholder
                              ? null
                              : flexRender(
                                  column.column.columnDef.header,
                                  column.getContext()
                                )}
                          </CustomText>
                        )}
                        {isSortingEnabled && <div>icon</div>}
                      </Flex>
                    </Th>
                  );
                })}
              </Tr>
            ))}
          </Thead>
          <Tbody>
            {table.getRowModel().rows?.length
              ? table.getRowModel().rows.map((row, id) => {
                  return (
                    <React.Fragment key={id}>
                      <Tr
                        background={id % 2 ? "white.absolute" : "grey.5"}
                        transition="all 0.2s ease-in-out"
                        _hover={{
                          bg: "primary.50",
                          transform: "translateY(-1px)",
                          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
                          "& td:last-child": {
                            bg: "transparent",
                          },
                        }}
                        opacity={1}
                        sx={{
                          "&:hover td:last-child": {
                            bg: "transparent !important",
                            transform: "none !important",
                          },
                        }}
                      >
                        {row.getVisibleCells().map((cell, index) => {
                          const isChecked = () => {
                            if (selectAll) {
                              //@ts-ignore
                              if (unSelectedRows.has(row.original.id))
                                return false;
                              return true;
                            } else {
                              //@ts-ignore
                              if (selectedRows.has(row.original.id)) {
                                return true;
                              }
                              return false;
                            }
                          };

                          const isLast = isLastColumn(
                            index,
                            row.getVisibleCells()?.length
                          );

                          const cellStyles: CSSProperties = {
                            width: cell.column.getSize
                              ? cell.column.getSize()
                              : "inherit",
                            ...getStickyColumnStyle(isLast),
                          };

                          return (
                            <Td
                              key={`${row.id}-${index}`}
                              p="18px 12px"
                              textAlign={
                                index === row.getVisibleCells()?.length - 1 &&
                                lastAlignRight
                                  ? "right"
                                  : "left"
                              }
                              style={cellStyles}
                              transition="all 0.15s ease-in-out"
                            >
                              {cell.column.id === "selection" ? (
                                <CustomCheckbox
                                  isChecked={isChecked()}
                                  setIsChecked={() => {
                                    handleRowSelect(
                                      //@ts-ignore
                                      row.original.id,
                                      !isChecked()
                                    );
                                  }}
                                />
                              ) : (
                                flexRender(
                                  cell.column.columnDef.cell,
                                  cell.getContext()
                                )
                              )}
                            </Td>
                          );
                        })}
                      </Tr>
                    </React.Fragment>
                  );
                })
              : null}
          </Tbody>
        </Table>
      )}
    </Flex>
  );
}
