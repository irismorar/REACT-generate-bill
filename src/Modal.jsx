import { useBillLogic } from "./useBillLogic";

export function Modal() {
  const { tip, setTip } = useBillLogic();
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
            value={tip}
            onChange={(event) =>
              tip <= 30 ? setTip(Number(event.target.value)) : setTip(0)
            }
          ></input>
        </div>
        <button>Generate bill</button>
      </div>
    </div>
  );
}
