import { useContext, createContext, useState } from "react";

type LeaveModalType = {
  leaveModal: boolean;
  setleaveModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const leaveModalContext = createContext({} as LeaveModalType);
const useLeaveModal = () => useContext(leaveModalContext);


const LeaveMobileProvider = ({ children }: any) => {
  const [leaveModal, setleaveModal] = useState<boolean>(false);
  return (
    <leaveModalContext.Provider value={{ leaveModal, setleaveModal }}>
      {children}
    </leaveModalContext.Provider>
  );
};

export { LeaveMobileProvider, useLeaveModal, leaveModalContext };
