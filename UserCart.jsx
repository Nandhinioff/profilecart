// import pic1 from '../assets'
const userData=[
    {
        name:"Reena Shetty",
        city:"New York",
        description :"Front End Developer",
        skills: ["UI / UX", "Frontend developer" ,"HTML","CSS","JavaSccript", "web developer" , "networking"],
        online:true,
         profile:"img/1.jpg"


    },
    {
        name:"Ariana",
        city:"Paris",
        description :"Back End Developer",
        skills: ["DSA", "Back developer" ,"JAVA","Spring Boot","JavaSccript", "Programming" , "networking"],
        online:false,
         profile:"img/2.jpg"


    },
    {
        name:"Shilpa Rao",
        city:"Mumbai",
        description :"Graphic Designer",
        skills: ["UI / UX", "Frontend developer" ,"Figma","Photoshop","tools", "Graphic designer" , "networking"],
        online:true,
         profile:"img/3.jpg"


    },
]
function User(props){
        
    return  <div   className="card-container" >
        <span className={props.online? "pro online": "pro offline"}>{props.online? "ONLINE" : "OFFLINE"}</span>
       <img src={props.profile} className="img" alt="user" width="200px" height="200px" />
       <h3>{props.name}</h3>
       <h3>{props.city}</h3>
       <p>{props.description}</p>
       <div className="btn">
       <button className="primary">Message</button>
       <button className="primary outline">Following</button>
       </div>
       <div className="skills">
        <h6>Skills</h6>
        <ul>
          {props.skills.map((item ,index)=>(
            <li key={index}>{item}</li>
          ))}
        </ul>
       </div>
       </div>
}


export const UserCart = () => {
  return (
    <>{
        userData.map((item, index)=>(
            <User key={index}
             name={item.name}
             city={item.city}
             description={item.description}
             skills={item.skills}
             profile={item.profile}
             online={item.online}
             />
        ))}
    </>
        
  )
}
