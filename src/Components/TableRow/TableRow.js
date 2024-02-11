import './TableRow.css';

const TableRow = ({index, data, actions = []}) => {

    return (
        <tr>
            {Object.values(data).map((values) => (
                <td key={values}>{values}</td>
            ))}

            {actions.length > 0 &&
            <td>
                {actions.map((action, key) => (
                    <button key={key}
                    onClick={action.withParameters ?
                        () => action.fn(index)
                        : action.fn}
                    className={'mx-2 btn btn-'+action.type}>
                        {action.text}
                    </button>
                ))}
            </td>
            }
        </tr>
    )
}

export default TableRow;