export default class Test {
    static feuH() {
        // <div class="body" id="app">
        //     <div class="feu horizontal">
        //         <table>
        //             <tbody>
        //                 <tr>
        //                     <td style="background-color: red;"></td>
        //                     <td style="background-color: yellow;"></td>
        //                     <td style="background-color: green;"></td>
        //                 </tr>
        //             </tbody>
        //         </table>
        //     </div>
        // </div>
        var app, div, table, tbody, tr, td;
        app = document.getElementById("app");
        
        div = app.appendChild(document.createElement("div"));
        div.classList.add("feu");
        div.classList.add("horizontal");
        
        table = div.appendChild(document.createElement("table"));
        
        tbody = table.appendChild(document.createElement("tbody"));
        
        tr = tbody.appendChild(document.createElement("tr"));
        
        td = tr.appendChild(document.createElement("td"));
        td.style.backgroundColor = "red";
        
        td = tr.appendChild(document.createElement("td"));
        td.style.backgroundColor = "yellow";
        
        td = tr.appendChild(document.createElement("td"));
        td.style.backgroundColor = "green";
    }
}