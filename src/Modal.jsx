export function Modal({ tips, setAppPage, setTips, setBillOn }) {
  return (
    <div className="modal-container">
      <div className="modal-message">
        <div>
          {" "}
          Add tips:
          <input
            type="number"
            min="0"
            max="30"
            value={tips}
            onChange={(event) =>
              tips <= 30 ? setTips(Number(event.target.value)) : setTips(0)
            }
          ></input>
        </div>
        <button
          onClick={() => {
            setAppPage("generate-bill");
            setBillOn(true);
          }}
        >
          Generate bill
        </button>
      </div>
    </div>
  );
}
