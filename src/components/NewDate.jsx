import React, { useEffect, useState } from "react";
import NewApod from "./NewApod";

const months = ['January', 'February', 'March', 'April', 
'May', 'June', 'July', 'August', 'September', 'October',
'November', 'December'];

const initialFormValues = {
    day: '',
    month: '',
    year: '',
  }

const NewDate = () => {
    const [formValues, setFormValues] = useState(initialFormValues);
    const [date, setDate] = useState();

    const updateForm  = (inputName, inputValue) => {
        setFormValues({...formValues, [inputName]: inputValue})
      }

    const onChange = evt => {
        const { name, value } = evt.target;
        updateForm(name, value);
    }

    const pushDate = () => {
        const dateArr = [];
        const numMonth = (months.indexOf(formValues.month) + 1)
        dateArr.push(parseInt(formValues.year), numMonth, parseInt(formValues.day))
        return dateArr;
    }

    const openApod = evt => {
        evt.preventDefault();
        setDate(pushDate())
    }

    useEffect(() => {
        const populateMonths = () => {
            months.forEach(month => {
                const options = document.createElement('option');
                options.textContent = month;
                options.value = `${month}`;
                document.getElementById("month").appendChild(options);
            })
        }
        
        populateMonths();
    }, [])

    useEffect(() => {
        const populateYears = () => {
            let year = new Date().getFullYear();
            for (let i = 0; i < 51; i++) {
                const option = document.createElement('option');
                option.textContent = year - i;
                option.value = `${year-i}`
                document.getElementById("year").appendChild(option);
            }
        }
        populateYears();
    }, [])

    useEffect(() => {
        const populateDays = (month) => {

            const daySelect = document.getElementById("day");
            while(daySelect.firstChild){
                daySelect.removeChild(daySelect.firstChild)
            }

            let dayNum;
            if(month === 'January' || month === 'March' || 
        month === 'May' || month === 'July' || month === 'August' 
        || month === 'October' || month === 'December') {
            dayNum = 31;
        } else if(month === 'April' || month === 'June' 
        || month === 'September' || month === 'November') {
            dayNum = 30;
        }else{
            
        }
    
        for (let i = 1; i <= dayNum; i++){
            const option = document.createElement('option');
            option.textContent = i;
            option.value = `${i}`;
            daySelect.appendChild(option);
    
        }
    
    }
        const monthSelect = document.getElementById("month").value;
        populateDays(monthSelect);
    }, [formValues.month])

    return (
        <div>
            <form onSubmit={openApod}>
                <span>
                    <label>Day:</label>
                    <select name="day" id="day" value={formValues.day} onChange={onChange}></select>
                </span>
                <span>
                        <label>Month:</label>
                    <select name="month" id="month" value={formValues.month} onChange={onChange}></select>
                </span>
                <span>
                        <label>Year:</label>
                    <select name="year" id="year" value={formValues.year} onChange={onChange}></select>
                </span>
                <button>Get New Feature</button>
            </form>
            {date && <NewApod date={date}/>}
       </div>
    )
}

export default NewDate;