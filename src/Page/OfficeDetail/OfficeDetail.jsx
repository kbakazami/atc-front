import {useState} from "react";

export default function OfficeDetail()
{
    const [office, setOffice] = useState(OfficeService.getOffices());
}