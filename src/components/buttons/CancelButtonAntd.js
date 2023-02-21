import { Button } from 'antd';

const CancelButtonAntd = ({value, onClick}) => {
    return (
        <Button
            onClick={onClick}
            style={{borderRadius: 15, background: "#F4F4F9", borderColor: "#435ebf", color: "#435ebf", margin: 5, marginBottom: 20}}
        >
        {value}
        </Button>
    );
}
export default CancelButtonAntd;