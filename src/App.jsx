import { useState } from 'react'
import './App.css'

function Register() {
  const [username, setUsername] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')

  const [gender, setGender] = useState('')   
  const [role, setRole] = useState('')     

  const [hobbies, setHobbies] = useState([])

  const genderOptions = [
    { label: 'Male', value: 'Male' },
    { label: 'Female', value: 'Female' },
    { label: 'Others', value: 'Others' },
  ]

  const hobbyOptions = [
    { label: 'Music', value: 'Music' },
    { label: 'Movies', value: 'Movies' },
    { label: 'Plastic Model', value: 'Plastic Model' },
  ]

  const roleOptions = [
    { label: 'General Staff', value: 'General staff' },
    { label: 'Developer', value: 'Developer' },
    { label: 'System Analyst', value: 'System Analyst' },
  ]

  function onHobbiesToggle(event) {
    const targetValue = event.target.value
    const isChecked = event.target.checked
    if (!isChecked) {
      setHobbies(prev => prev.filter(item => item !== targetValue))
    } else {
      setHobbies(prev => [...prev, targetValue])
    }
  }

  return (
    <div>
      {/* Username */}
      <div className="form-row">
        <label htmlFor="username" className="form-label">Username</label>
        <input
          id="username"
          type="text"
          className="form-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      {/* Firstname */}
      <div className="form-row">
        <label htmlFor="firstname" className="form-label">Firstname</label>
        <input
          id="firstname"
          type="text"
          className="form-input"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
      </div>

      {/* Lastname */}
      <div className="form-row">
        <label htmlFor="lastname" className="form-label">Lastname</label>
        <input
          id="lastname"
          type="text"
          className="form-input"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
      </div>

      {/* Gender */}
      <div className="form-row">
        <div className="section-title">Gender</div>
        <div className="choice-group">
          {genderOptions.map((g) => (
            <label key={g.value} className="choice">
              <input
                type="radio"
                name="gender"
                value={g.value}
                checked={gender === g.value}   // none checked when gender === ''
                onChange={(e) => setGender(e.target.value)}
              />
              <span>{g.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Hobbies */}
      <div className="form-row">
        <div className="section-title">Hobbies</div>
        <div className="choice-group">
          {hobbyOptions.map((h) => (
            <label key={h.value} className="choice">
              <input
                type="checkbox"
                value={h.value}
                checked={hobbies.includes(h.value)}  // all false initially
                onChange={onHobbiesToggle}
              />
              <span>{h.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Role */}
      <div className="form-row">
        <div className="section-title">Role</div>
        <select
          className="form-select"
          value={role}                         // '' shows placeholder
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="">-- Select Role --</option>
          {roleOptions.map((r) => (
            <option key={r.value} value={r.value}>
              {r.label}
            </option>
          ))}
        </select>
      </div>

      <hr className="hr" />

      {/* Display Input Data */}
      <div className="summary">
        <div><strong>Username:</strong> <span className="value">{username}</span></div>
        <div><strong>Firstname:</strong> <span className="value capitalize">{firstname}</span></div>
        <div><strong>Lastname:</strong> <span className="value capitalize">{lastname}</span></div>
        <div><strong>Gender:</strong> <span className="value">{gender ? gender.toLowerCase() : ''}</span></div>
        <div>
          <strong>Hoobies:</strong>{' '}
          <span className="value capitalized">
            {hobbies.length ? hobbies.map(h => h.toLowerCase()).sort().join(', ') : ''}
          </span>
        </div>
        <div><strong>Role:</strong> <span className="value">{role ? role.toLowerCase() : ''}</span></div>
      </div>
    </div>
  )
}

function App() {
  return (
    <div>
      <Register />
    </div>
  )
}

export default App