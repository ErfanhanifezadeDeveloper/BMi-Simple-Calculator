const calculateAction = ()=>{
    return async (dispatch , getState)=>{
        const weight = getState().weight;
        const height = getState().height;
        
        if(weight <= 0 && height <= 0)
        {
            return
        }
        else{
            const meter = Math.pow(height , 2);
            const calculate = weight / meter;

            const Rounde = calculate.toFixed(2);
            const Num = parseFloat(Rounde);

            let condition;

            if(Num <= 18) condition = "#1866a7"
            if(Num > 18 && Num <= 24) condition = "rgb(0, 206, 0)"
            if(Num > 24 && Num <= 29) condition = "yellow"
            if(Num > 29) condition = "#fa1a3f"

            const Final = {
                bmi: Num,
                condition
            };
            await dispatch({type: "CALCULATE" , payload: [Final]});
        }

    }
}

export default calculateAction;