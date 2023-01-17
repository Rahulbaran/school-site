import NoticeData from "./data/NoticeData";

function NoticeBoard() {
  return (
    <div className="notice-board-container">
      <h2>Notice Board</h2>

      <div className="notice-wrapper">
        {NoticeData.map(note => {
          return (
            <div className="notice" key={note.id}>
              <p>{note.notice}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default NoticeBoard;
