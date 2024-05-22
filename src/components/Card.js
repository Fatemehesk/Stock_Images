import { useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom" 
import './cards.css';

function Card({ path, title, createdAt, user, id }) {
    const navigate = useNavigate()
    const handleOnClick = () => {
        navigate(`/images/${id}`, { state : { id } })
    }

    const timestamp = useMemo(() => {
        const date = `${new Date(createdAt?.seconds*1000)}`.split(" ")
        return `${date[1]} ${date[2]} ${date[3]}`
    }, []);
    return(
        <div className="card mb-4 " style={{ cursor: 'pointer' }} onClick={handleOnClick}>
      <div
        className="card-img-top"
        style={{
          height: '220px',
          backgroundImage: `url(${path})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      <div className="card-body">
        <h5 className="card-title text-center mt-1">{title}</h5>
        <div className="d-flex justify-content-between text-muted">
          <p className="mb-0 card-time">{timestamp}</p>
          <i>{`@${user}`}</i>
        </div>
      </div>
    </div>
    )
}
export default Card;