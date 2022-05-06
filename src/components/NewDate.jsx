import React, { useEffect, useState } from "react";
import NewApod from "./NewApod";
import AnimatedPage from "./Animations/AnimatedPage";

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
        <AnimatedPage>
        <div>
            <div className="h-40 flex justify-center items-center bg-prim dark:bg-slate-900">
                <form onSubmit={openApod}>
                    <span className="date-span">
                        <label>Day:</label>
                        <select className="bg-prim dark:bg-gray-400 dark:text-white"
                                             name="day" id="day"
                                             value={formValues.day} onChange={onChange}></select>
                    </span>
                    <span className="date-span">
                            <label>Month:</label>
                        <select className="bg-prim dark:bg-gray-400 dark:text-white"
                                             name="month" id="month"
                                             value={formValues.month} onChange={onChange}></select>
                    </span>
                    <span className="date-span">
                            <label>Year:</label>
                        <select className="bg-prim dark:bg-gray-400 dark:text-white"
                                             name="year" id="year"
                                             value={formValues.year} onChange={onChange}></select>
                    </span>
                    <button className="bg-white border-2 border-black p-2
                                    hover:bg-sec transition-all duration-200
                                    dark:bg-black dark:text-white
                                    dark:border-teal-300 dark:hover:bg-gray-400 dark:hover:text-black"
                                    >Get New Feature</button>
                </form>
            </div>
            <div>
            {!date && (
                <div className="h-screen w-screen bg-slate-600"></div>
            )}   
            {date && <NewApod date={date}/>}
            </div>
        </div>
        </AnimatedPage>
    )
}

export default NewDate;