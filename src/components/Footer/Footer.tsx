import React from "react";

interface FooterProps{

}

export const Footer:React.FC<FooterProps> =({})=>{
    return(
        <div style={{margin:"20px 58px"}}>
            Общество с ограниченной ответственностью «Приносим радость». <br/>
            Свидетельство о государственной регистрации выдано Минским горисполкомом от 19.04.2018 с регистрационным номером 193067319. УНП 193067319. <br/>
            Юр. адрес: 220117, г. Минск, пр-т Газеты Звязда, д. 47, пом. 305. <br/>
            Время работы с понедельника по пятницу с 9:00 до 17:30. 
            Контакты: 695-25-25 МТС, A1, life:), oz@oz.by. <br/>
            Уполномоченный на рассмотрение обращений покупателей: генеральный директор ООО «Приносим радость», запись по телефону +375 17 278-50-98.
            Уполномоченные по защите прав потребителей: отдел торговли и услуг администрации Московского района г. Минска, +375 17 263-97-69, +375 17 368-80-49.

        </div>
    )
}