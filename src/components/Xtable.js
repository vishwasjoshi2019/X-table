import { tab } from '@testing-library/user-event/dist/tab';
import React, {useState} from 'react'

const Xtable = () => {
    const data=
    [
    
        { date: "2022-09-01", views: 100, article: "Article 1" },
    
        { date: "2023-09-01", views: 100, article: "Article 1" },
    
        { date: "2023-09-02", views: 150, article: "Article 2" },
    
        { date: "2023-09-02", views: 120, article: "Article 3" },
    
        { date: "2020-09-03", views: 200, article: "Article 4" }
    
    ]

    const [tableData,setTableData]=useState(data);
    
    const sortByDate=()=>{
        const sortedData = [...tableData].sort((a, b) => {
            if (new Date(a.date) > new Date(b.date)) {
              return -1;
            }
            if (new Date(a.date) < new Date(b.date)) {
              return 1;
            }
            return b.views - a.views;
          });
          setTableData(sortedData);
    }

    const sortByViews=()=>{
        const sortedData = [...tableData].sort((a, b) => {
            if (a.views > b.views) {
              return -1;
            }
            if (a.views < b.views) {
              return 1;
            }
            return new Date(b.date) - new Date(a.date);
          });
          setTableData(sortedData);
    }

  return (
    <div>
        <h1>Date and Views Table</h1>
        <button onClick={sortByDate}>Sort by Date</button>
        <button onClick={sortByViews}>Sort by Views</button>
        <table >
            <thead>
                <tr>
                <td>Date</td>
                <td>Views</td>
                <td>Article</td>
                </tr>
                
            </thead>
            <tbody>
            {
                tableData.map((item,index)=>(
                    <tr key={index}>
                    <td>{item.date}</td>
                    <td>{item.views}</td>
                    <td>{item.article}</td>
                    </tr>
                ))
            }
            </tbody>

        </table>
    </div>
  )
}

export default Xtable