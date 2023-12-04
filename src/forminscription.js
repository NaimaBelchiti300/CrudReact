import React, { useState } from 'react';
import "./index.css"

export default function Forminscri() {
  const date = new Date().toLocaleDateString();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [Naissance, setNaissance] = useState('');
  const [filier, setFilier] = useState('');
  const [etat, setEtat] = useState('');
  const [niveau, setNiveau] = useState('');
  const [user, setUser] = useState([]);
  const [editUserId, setEditUserId] = useState(null);
  // const [seeimg,setseeimg]=useState("")
  const[img,setimg]=useState("")
  

  function getdata(e) {
    e.preventDefault();
    if ( name &&email &&Naissance &&filier &&etat&&niveau) {
      const newuser = { name,email,Naissance,filier,etat,niveau ,img};
      setUser([...user, newuser]);
  setName("")
  setEmail("")
  setNaissance("")
  setFilier("")
  setEtat("")
  setNiveau("")
    }else{
      alert("veuillez remplir svp tous les champs")
    }
  }


  function deletedata(username) {
    const filterdata = user.filter((u) => u.name !== username);
    setUser(filterdata);
  }


function editUser(username) {
  setEditUserId(username);
  const currentUser = user.find((u) => u.name === username);
  if (currentUser) {
   
    setName(currentUser.name);
    setEmail(currentUser.email);
    setNaissance(currentUser.Naissance)
    setFilier(currentUser.filier)
    setEtat(currentUser.etat)
    setNiveau(currentUser.niveau)
    setimg(currentUser.img)
  }
}

  function updateUser(e) {
    e.preventDefault()
    const updatedUsers = user.map((u) =>
      u.name === editUserId ? {  name,email,Naissance,filier,etat,niveau,img } : u
    );
    setUser(updatedUsers);
  
  setName("")
  setEmail("")
  setNaissance("")
  setFilier("")
  setEtat("")
  setNiveau("")
  setimg("")
  setEditUserId(null);
  }



  
function changefile(e){
  const selectedImage = e.target.files[0];
  const reader = new FileReader();

  reader.onload = (e) => {
    setimg(e.target.result);
  };

  if (selectedImage) {
    reader.readAsDataURL(selectedImage);
  }
 }
// function seecin(e){
// e.preventDefault()
// if(img){
  
//   setseeimg(<img src={img} alt="Selected" width="100" height="100" />)
  
// }

// }
  return (
   <>
   
  
   
   
      <div className='post'>
        <div className='containerpost'>
        <form class="form-group">
        <h3 style={{ textAlign: 'center', fontStyle: 'oblique', marginBottom: '30px' }} className='text text-primary'>
          Formulaire d'inscription pour l'année : {date}
          </h3>
         <div className='row'>
             <div className='col'>
               <label>Nom Complete :</label>
               <input type='text' className='form-control' placeholder='Nom Complete' value={name} onChange={(e) => setName(e.target.value)} />
             </div>
             <div className='col'>
               <label>Email :</label>
               <input type='email' className='form-control' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
             </div>
             <div className='col'>
               <label>Date de Naissance :</label>
               <input
                 type='date'
                 className='form-control'
                 placeholder='Date Naissance'
                 value={Naissance}
                 onChange={(e) => setNaissance(e.target.value)}
               />
             </div>
           </div>
           <div className='row'>
             <div className='col'>
               <label>Filière :</label>
               <select className='form-control' value={filier} onChange={(e) => setFilier(e.target.value)}>
                 <option>devloppement option Full Stack</option>
                 <option>devloppement option  Mobile</option>
                 <option>Digital Design</option>
                 <option>InfraStrcture Digital</option>
               </select>
             </div>
             <div className='col'>
               <label>Niveau D'etude :</label>
               <br />
               <div className='form-check form-check-inline'>
                 <label>Technicien Specialise</label>
                 <input
                   className='form-check-input'
                   type='radio'
                   value='Technicien Specialise'
                   name='niveau'
                   checked={niveau === 'Technicien Specialise'}
                   onChange={(e) => setNiveau(e.target.value)}
                 />
               </div>
               <div className='form-check form-check-inline'>
                 <label>Technicien</label>
                 <input
                   className='form-check-input'
                   type='radio'
                   value='Technicien'
                   name='niveau'
                   checked={niveau === 'Technicien'}
                   onChange={(e) => setNiveau(e.target.value)}
                 />
               </div>
             </div>
             <div className='col'>
               <label>Etat De Formation :</label>
               <br />
               <div className='form-check form-check-inline'>
                 <label>Encour</label>
                 <input
                   className='form-check-input'
                   type='radio'
                   value='Encour'
                   name='etat'
                   checked={etat === 'Encour'}
                   onChange={(e) => setEtat(e.target.value)}
                 />
               </div>
               <div className='form-check form-check-inline'>
                 <label>Diplome</label>
                 <input
                   className='form-check-input'
                   type='radio'
                   value='Diplome'
                   name='etat'
                   checked={etat === 'Diplome'}
                   onChange={(e) => setEtat(e.target.value)}
                 />
               </div>
             </div>
           
           </div>
           <div className='row'>
            <div className='col'>
                <label>Cin Recto:</label>
                <input type='file' className='form-control' accept="image/*" onChange={changefile} />
                
            </div>
           
     
          </div>
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
           <br />
           {editUserId === null ? (
           <div className='row'>
           <div className='col'>
             <input
               type='submit'
               className='form-control'
               style={{ width: '700px', marginLeft: '100px', marginTop: '30px', backgroundColor: 'gray', color: 'white' }}
               value='Submit'
               onClick={getdata}
             />
           </div>
         </div>
       
            
           ) :    <div className='row'>
           <div className='col'>
             <input
               type='submit'
               className='form-control'
               style={{ width: '700px', marginLeft: '100px', marginTop: '30px', backgroundColor: '#22bb33', color: 'white' }}
               value='Modifier'
               onClick={updateUser}
             />
           </div>
         </div>}
         </form>
      
        
         <h3 style={{ color: 'black', textAlign: 'center', fontStyle: 'oblique', marginTop: '10px' }} className='text text-primary'>
          Les informations des utilisateurs:
        </h3>
           
         <table className='table table-borderd table-hover'>
           <thead>
             <tr>
               <th scope='col'>Name</th>
               <th scope='col'>Email</th>
               <th scope='col'>Naissance</th>
               <th scope='col'>Filière</th>
               <th scope='col'>Niveau</th>
               <th scope='col'>Etat</th>
               <th scope='col'>Cin</th>
               <th scope='col'>Gérer données</th>
             </tr>
           </thead>
           <tbody>
             {user.map((u) => (
               <tr key={u.name}>
                 <th scope='row'>{u.name}</th>
                 <td>{u.email}</td>
                 <td>{u.Naissance}</td>
                 <td>{u.filier}</td>
                 <td>{u.niveau}</td>
                 <td>{u.etat}</td>
                 <td><img src={u.img} alt="Selected" width="100" height="100" /></td>
                 <td>
                   <button
                     className='btn btn-danger'
                     style={{ width: '70px', height: '30px', fontSize: '13px', textAlign: 'center', paddingTop: '1px' }}
                     onClick={() => deletedata(u.name)}
                   >
                     Delete
                   </button>
                   <button
                     className='btn'
                     style={{ width: '70px', height: '30px', fontSize: '13px',backgroundColor: '#22bb33', textAlign: 'center', paddingTop: '1px',color:"white",marginLeft:"10px" }}
                     onClick={() => editUser(u.name)} 
                   >
                     Modifier
                   </button>
                 </td>
               </tr>
             ))}
           </tbody>
         </table>
           
    
       </div>
        </div>
    
   
  

       
  
    </>
  );
}
