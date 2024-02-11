import './Table.css';
import TableRow from '../TableRow/TableRow';

const Table = ({data, actions = []}) => {
    return (
        <table className='table table-striped table-dark'>
            <thead>
                <tr>
                    {data.header.map((header) => (
                        <th key={header}>{header}</th>
                    ))}
                    {actions.length > 0 &&
                        <th>Actiuni</th>
                    }
                </tr>
            </thead>
            <tbody>
                {data.data.map((row, index) => (
                    <TableRow
                    key={index}
                    index={index}
                    data={row}
                    actions={actions}
                    />
                ))}
            </tbody>
        </table>
    )
}

export default Table;