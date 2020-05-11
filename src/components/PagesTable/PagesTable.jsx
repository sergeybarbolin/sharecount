import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip } from '@material-ui/core';
import { getPagesRequest } from './../../redux/pages/actions';

const columns = [
    { 
        id: 'owner', 
        label: 'Источник', 
    },
    {
        id: 'title',
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
        id: 'publishedDate',
        label: 'Дата обновления',
        minWidth: 120,
        align: 'center',
    },
];

function createData({ _id, owner, title, share: { vk, fb, ok }, publishedDate }) {
    const vkCount = Number.isInteger(parseInt(vk)) ? parseInt(vk) : 0;
    const okCount = Number.isInteger(parseInt(ok)) ? parseInt(ok) : 0;
    const fbCount = Number.isInteger(parseInt(fb)) ? parseInt(fb) : 0;

    const summCount = vkCount + okCount + fbCount;

    return { _id, owner, title, vkCount, fbCount, okCount, summCount, publishedDate };
}

let rows = [
    createData({
        _id: 1,
        owner: '5eb57bdc552f719aa079326c',
        title: 'Суд Красноярска арестовал бизнесмена и политика Анатолия Быкова, подозреваемого в организации заказных убийств',
        share: {
            vk: 302,
            fb: 233,
            ok: 32,
        },
        publishedDate: '08.05.2020',
    }),
    createData({
        _id: 2,
        owner: '5eb57bdc552f719aa079326c',
        title: 'Росстат отчитался о стабильной вторую неделю подряд инфляции',
        share: {
            vk: 637,
            fb: 533,
            ok: 132,
        },
        publishedDate: '08.05.2020',
    }),
];

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 600,
    },
    title: {
        display: 'block',
        maxWidth: 270,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    }
});

export let PagesTable = (props) => {
    const classes = useStyles();
    const { getPagesRequest, isLoading, items } = props;

    useEffect(() => {
        getPagesRequest()
    }, [getPagesRequest])

    return (
        <Paper variant="outlined" className={classes.root}>
            {!isLoading && <TableContainer className={classes.container}>
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
                            { items.map(item => createData(item)).map(row => (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                    {columns.map(column => {
                                        const value = row[column.id];
                                        return (
                                            <TableCell key={`${column.id}-${row.id}`} align={column.align}>
                                                { 
                                                    column.id === 'title' ? (
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
            </TableContainer> }
        </Paper>
    );
}
const mapStateToProps = state => state.pages
const mapDispatchToProps = { getPagesRequest }

PagesTable = connect(mapStateToProps, mapDispatchToProps)(PagesTable)