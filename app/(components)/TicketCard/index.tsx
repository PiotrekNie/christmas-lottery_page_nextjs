import DeleteBlock from "../DeleteBlock";
import PrioritDisplay from "../PriorityDisplay";
import ProgressDisplay from "../ProgressDisplay";
import StatusDisplay from "../StatusDisplay";

function TicketCard() {
  return (
    <div className="flex flex-col bg-card hover:bg-card-hover rounded-md  shadow-lg p-3 m-2">
      <div className="flex mb-3">
        <PrioritDisplay />
        <div className="ml-auto">
          <DeleteBlock />
        </div>
      </div>
      <h4 className="mb-1">Ticket title</h4>
      <hr className="h-px border-0 bg-page mb-2" />
      <p className="whitespace-pre-wrap">this is the ticket description</p>
      <div className="flex-grow"></div>
      <div className="flex mt-2">
        <div className="flex flex-col">
          <p className="text-xs my-1">08/13/2023 10:34 PM</p>
          <ProgressDisplay />
        </div>
        <div className="flex items-end ml-auto">
          <StatusDisplay />
        </div>
      </div>
    </div>
  );
}

export default TicketCard;
