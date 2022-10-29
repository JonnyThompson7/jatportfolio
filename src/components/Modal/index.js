function Modal({ currentProject, onClose }) {
  
  const { name, description, picture, repo, link } = currentProject
  
  return (
    <div>
      <div>
        <div>
          <h3>{name}</h3>
          <img src={picture} alt={name} />
          <div>
            <button><a href={repo}>GitHub Repo</a></button>
            <button><a href={link}>Application Link</a></button>
          </div>
          <p>{description}</p>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  )
}

export default Modal;