import React from 'react'
import ExpenseTracker from './ExpenseTracker';
import { useNavigate } from 'react-router-dom';

type Props = {
    onTrue :any
    onClose : any
}

const ExpemseTracketWrapper = (props: Props) => {
    const navigate = useNavigate();
    return <ExpenseTracker {...props} navigate={navigate} />;
}

export default ExpemseTracketWrapper
