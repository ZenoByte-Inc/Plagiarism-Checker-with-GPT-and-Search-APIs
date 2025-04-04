import { create } from 'zustand';

const useResultScan = create((set) => ({
  resultScan: null,
  setResultScan: (resultScan) => set({ resultScan }),
}));

export default useResultScan;
