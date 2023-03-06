import { useState } from "react";
import Career from "./Components/Career";
import "./styles.css";

function App() {
  const [career, setCareer] = useState({
    careerName: "",
    grade: 0
  })

  const [careers, setCareers] = useState([
    {
      careerName: "Base de Datos",
      value: "database",
      cantStudents: 0,
      average: [],
    },
    {
      careerName: "Desarrollo Frontend",
      value: "frontend",
      cantStudents: 0,
      average: [],
    },
    {
      careerName: "Desarrollo Backend",
      value: "backend",
      cantStudents: 0,
      average: [],
    },
    {
      careerName: "DevOps",
      value: "devops",
      cantStudents: 0,
      average: [],
    }
  ])

  function handleSubmit(e) {
    e.preventDefault();
    if(career.careerName != ""){
      const careerFilter = careers.filter((c) => c.value === career.careerName)
      careerFilter[0].cantStudents ++
      careerFilter[0].average.push(career.grade)

      const newCareers = []
      careers.forEach(c => {
        c.value === career.careerName 
          ? newCareers.push(careerFilter[0])
          : newCareers.push(c)
      });
      setCareers(newCareers)
      e.target.averageValue.value = ""
    }
  }

  return (
    <div className="container">
      <h1>Promedio de estudiantes por carrera</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="container_input">
          <select required defaultValue={'DEFAULT'} name="selectCarrer" onChange={(e) => setCareer({...career, careerName:e.target.value})}>
            <option value="DEFAULT" disabled>Selecione una carrera</option>
            <option value="database">Base de Datos</option>
            <option value="backend">Desarrollo Backend</option>
            <option value="frontend">Desarrollo Frontend</option>
            <option value="devops">Devops</option>
          </select>
          <input name="averageValue" placeholder="nota x estudiante: 0-10" required onChange={(e)=>{setCareer({...career, grade:parseInt(e.target.value)})}}/>
        </div>
        <input type="submit" value="Salvar" />
      </form>

      <div className="container">
        <table border="1" className="line_title">
          <thead>
            <tr>
              <th>Carrera</th>
              <th>Cantidad de Estudiantes</th>
              <th>Promedio de Calificaciones de los Estudiantes</th>
            </tr>
          </thead>
          <tbody>
            {careers.map((c, i)=> <Career key={i} career={c}/>)}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
