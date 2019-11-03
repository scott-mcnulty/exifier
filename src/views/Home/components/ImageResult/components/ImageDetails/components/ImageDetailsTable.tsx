import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import UploadedImage from '../../../../../interfaces/UploadedImage';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    paper: {
      marginTop: theme.spacing(3),
      width: '100%',
      overflowX: 'auto',
      marginBottom: theme.spacing(2),
    },
    table: {
    //   minWidth: 650,
        overflowX: 'hidden',
        width: '100%'
    },
  }),
);


const ImageDetailsTable: React.FC<{image: UploadedImage}> = props => {
    const classes = useStyles();
    const {image} = props;
    const exifDataKeys = Object.keys(image.exifData);

    return (
        <Table className={classes.table} aria-label="exif table" size="small">
            <TableHead>
                <TableRow>
                    <TableCell align="left">EXIF field</TableCell>
                    <TableCell align="left">Value</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {exifDataKeys.map((key: string) => {
                    return (
                        <TableRow key={key}>
                            <TableCell align="left">{key}</TableCell>
                            <TableCell align="left">{JSON.stringify(image.exifData[key])}</TableCell>
                        </TableRow>
                    )
                })}
            </TableBody>
        </Table>
    )
}

export default ImageDetailsTable;