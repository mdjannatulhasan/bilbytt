import { Button, HStack } from '@chakra-ui/react';
import React from 'react';

const Pagination = ({ setPage, page, isPreviousData, dataCar, isFetching }) => {
    return (
        <HStack gap={4} m={2}>
            <Button
                onClick={() => setPage(page => Math.max(page - 1, 0))}
                disabled={page === 1}

            >
                Previous Page
            </Button>
            <span>Current Page: {page}</span>
            <Button
                onClick={() => {
                    if (!isPreviousData && dataCar?.data.length) {
                        setPage(page => page + 1)
                    }
                }}
                disabled={page === dataCar?.data.length}
            >
                Next Page
            </Button>
            {isFetching ? <span> Loading...</span> : null}
        </HStack>
    );
};

export default Pagination;