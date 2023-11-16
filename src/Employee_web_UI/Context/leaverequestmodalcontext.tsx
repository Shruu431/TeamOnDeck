import { useContext, createContext, useState } from "react";

type LeaveRequestModalType = {
  leaveRequestModal: boolean;
  setleaveRequestModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const leaveRequestModalContext = createContext({} as LeaveRequestModalType);
const useLeaveRequestModal = () => useContext(leaveRequestModalContext);


const LeaveMobileProvider = ({ children }: any) => {
  const [leaveRequestModal, setleaveRequestModal] = useState<boolean>(false);
  return (
    <leaveRequestModalContext.Provider value={{ leaveRequestModal, setleaveRequestModal }}>
      {children}
    </leaveRequestModalContext.Provider>
  );
};

export { LeaveMobileProvider, useLeaveRequestModal, leaveRequestModalContext };
