import React from 'react'
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function createData(id, date, name, units, code, description, shipTo, paymentMethod, amount) {
    return { id, date, name, units, code, description, shipTo, paymentMethod, amount };
  }
  
  const rows = [
    createData(
      0,
      '16 Jan, 2022',
      'Whole Foods',
      2,
      '00FCAS002',
      'Organic Jackfruit - Tasty Thai',
      'Toronto, ON',
      'VISA ⠀•••• 3719',
      312.44,
    ),
    createData(
      1,
      '16 Jan, 2022',
      'Whole Foods',
      5,
      '555KN002',
      'Organic Kenari Nuts - Spicy Chili',
      'Toronto, ON',
      'VISA ⠀•••• 3719',
      866.99,
    ),
    createData(
      2,
      '20 Jan, 2022',
      'Summerhill Market',
      8,
      'DAJ1461A',
      'Coco Natura - Organic Coconut Seasoning Sauce',
      '1054 Mt Pleasant Rd, Toronto, ON M4P 2M4',
      'MC ⠀•••• 1253',
      100.81),
    createData(
      3,
      '26 Jan, 2022',
      'Epicure Cabbagetown',
      10,
      'UF056FA',
      'Nai - Ginger Green Tea',
      '300 Parliment St, Toronto, ON M5A 2B1',
      'AMEX ⠀•••• 2000',
      654.39,
    ),
    createData(
      4,
      '15 Mar, 2019',
      "Pusateri's Fine Foods",
      3,
      '000ZRG05',
      'Whole Grain Greenwheat Freekeh',
      '57 Yorkville Ave, Toronto, ON M5R 2B1',
      'Paid by check',
      212.79,
    ),
  ];

function preventDefault(event) {
    event.preventDefault();
  }
export default function RecentOrders() {
    return (
        <div>
            <h2>Recent Orders</h2>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Quantity (Units)</TableCell>
                        <TableCell>Product Code</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Ship To</TableCell>
                        <TableCell>Payment Method</TableCell>
                        <TableCell align="right">Sale Amount</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.date}</TableCell>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.units}</TableCell>
                            <TableCell>{row.code}</TableCell>
                            <TableCell>{row.description}</TableCell>
                            <TableCell>{row.shipTo}</TableCell>
                            <TableCell>{row.paymentMethod}</TableCell>
                            <TableCell align="right">{`$${row.amount}`}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
                See more orders
            </Link>
        </div>
    )
}