import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='body' >
        <h1 className='res'>RESUME</h1>
 <aside>
        
        <h1 id="nam">PITHANI VENKATA SAI BABA</h1>
         
    <i class="material-symbols-outlined md2 ">mail</i><a href="mailto:venky6572@gmail.com;" className='mail' title="click to sent mail">venky6572@gmail.com</a> <br/>
    <i class="material-symbols-outlined md2 ">call</i><a href="tel:7569822741;" title="click to call">7569822741</a>
    <br/><br/><br/><i class="material-symbols-outlined md2">calendar_month</i><span class="xcv">DOB: 16<sup>th</sup> JUL 2000</span>
    <br/><br/><br/><i class="material-symbols-outlined md2">sentiment_satisfied</i><span class="xcv">Unmarried</span>
   <br/><br/> <h3>KNOWN LANGUAGES:</h3>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="lan">Telugu:</span><i class="material-symbols-outlined md1">star</i><i class="material-symbols-outlined md1">star</i><i class="material-symbols-outlined md1">star</i><i class="material-symbols-outlined md1">star</i><i class="material-symbols-outlined md1">star</i>
   <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="lan">Hindi &nbsp;:</span><i class="material-symbols-outlined md1">star</i><i class="material-symbols-outlined md1">star</i><i class="material-symbols-outlined md1">star</i><i class="material-symbols-outlined md1">star_half</i><i class="material-symbols-outlined md3">star</i>
   <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="lan">English:</span><i class="material-symbols-outlined md1">star</i><i class="material-symbols-outlined md1">star</i><i class="material-symbols-outlined md1">star_half</i><i class="material-symbols-outlined md3">star</i><i class="material-symbols-outlined md3">star</i>
   <br/><br/><br/><i class="material-symbols-outlined md2">home</i><span class="xcv">Address:</span>
   <p>Yellammabanda,kukatplly,Hyderabad <br/>Telangana-500072 </p>

</aside>
        <h1 id="res">RESUME</h1>
    <section>
      <fieldset><legend>CAREER OBJECTIVE:</legend>
      <p>To be an asset to the company by contributing to the company’s value streams and self-development as a person, employee and a professional. To effectively utilize my skill sets and to be a part of organizational growth. </p> 
    </fieldset><br/>
    <fieldset><legend>QUALIFICATION:</legend>
        <table>
            <tr>
                <th>QUALIFICATION</th>
                <th>INSTITUTION</th>
                <th>PERCENTAGE</th>
                
            </tr>
            <tr>
                <td>B COM</td>
                <td>Ambedkar open university</td>
                <td>Pursuing</td>
                
            </tr>
            <tr>
                <td>INTER</td>
                <td>Telangana open school society</td>
                <td>70%</td>
                
            </tr>
            <tr>
                <td>SSC</td>
                <td>POORNIMA VIDYA NIKETAN HIGH SCHOOL</td>
                <td>82%</td>
                
            </tr>
        </table>    </fieldset><br/>
        <fieldset>
            <legend>STRENGTH:</legend>
            <ul>
                <li>Positive attitude and self confidence</li>
                <li>Ability to work in a Team and motivate self.</li>
                <li>Adaptable in any environment</li>
                <li>Good Communication and interactive abilities</li>
                <li>Hard working & active participation in every work</li>
                <li>Interested in Reading News & All Other Entertainment Shows</li>
            </ul>
        </fieldset><br/>

        <fieldset>
            <legend>Hobbies:</legend>
            <ul>
                <li>Playing Cricket</li>
                <li>Watching TV</li>
                
                
            </ul>
        </fieldset><br/>
        
        <fieldset>
            <legend>DECLARATION</legend>
            <p>     I hereby declare that the above written particulars are true to the best of myknowledge and belief.</p>
        </fieldset> 
        <p className='dateplace'>DATE:</p><p className='dateplace'>PLACE:</p>       

    
    </section>
    </div>
  );
}

export default App;
