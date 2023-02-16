import { Button } from 'antd';

const MenuButton = ({value, statusBtn, onClick}) => {
    const state = statusBtn === true ? {borderRadius: 15, background: "#435ebf", color: "#FFFFFF", margin: 8, marginBottom: 20}
    : {borderRadius: 15, background: "#F4F4F9", borderColor: "#435ebf", color: "#435ebf", margin: 8, marginBottom: 20}
    return (
        <Button
            onClick={onClick}
            style={state}
        >
        {value}
        </Button>
    );
}
export default MenuButton;