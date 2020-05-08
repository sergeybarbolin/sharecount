import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip } from '@material-ui/core';

const columns = [
    { 
        id: 'source', 
        label: 'Источник', 
    },
    {
        id: 'pageTitle',
        label: 'Страница'
    },
    {
        id: 'vkCount',
        label: 'VK',
    },
    {
        id: 'okCount',
        label: 'OK',
    },
    {
        id: 'fbCount',
        label: 'FB',
    },
    {
        id: 'summCount',
        label: 'Сумма',
        align: 'center',
    },
    {
        id: 'updateDate',
        label: 'Дата обновления',
        minWidth: 120,
        align: 'center',
    },
];

function createData({ id, source, pageTitle, countShare: { vk, fb, ok }, updateDate }) {
    const vkCount = Number.isInteger(parseInt(vk)) ? parseInt(vk) : 0;
    const okCount = Number.isInteger(parseInt(ok)) ? parseInt(ok) : 0;
    const fbCount = Number.isInteger(parseInt(fb)) ? parseInt(fb) : 0;

    const summCount = vkCount + okCount + fbCount;

    return { id, source, pageTitle, vkCount, fbCount, okCount, summCount, updateDate };
}

const rows = [
    createData({
        id: 1,
        source: '5eb57bdc552f719aa079326c',
        pageTitle: 'Суд Красноярска арестовал бизнесмена и политика Анатолия Быкова, подозреваемого в организации заказных убийств',
        countShare: {
            vk: 302,
            fb: 233,
            ok: 32,
        },
        updateDate: '08.05.2020',
    }),
    createData({
        id: 2,
        source: '5eb57bdc552f719aa079326c',
        pageTitle: 'Росстат отчитался о стабильной вторую неделю подряд инфляции',
        countShare: {
            vk: 637,
            fb: 533,
            ok: 132,
        },
        updateDate: '08.05.2020',
    }),
];

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 600,
    },
    pageTitle: {
        display: 'block',
        maxWidth: 270,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    }
});

export function ArticllesTable() {
    const classes = useStyles();

    return (
        <Paper variant="outlined" className={classes.root}>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="articles table">
                        <TableHead>
                            <TableRow>
                                { columns.map(column => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            { rows.map(row => (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                    {columns.map(column => {
                                        const value = row[column.id];
                                        return (
                                            <TableCell key={`${column.id}-${row.id}`} align={column.align}>
                                                { 
                                                    column.id === 'pageTitle' ? (
                                                        <Tooltip title={value}>
                                                            <span className={classes[column.id]}>{ value }</span>
                                                        </Tooltip>
                                                    ) : value
                                                }
                                                
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            ))}
                        </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}