import { create } from 'zustand';

const useContentInfo = create((set) => ({
  content: '',
  titleContent: '',
  setTitleContent: (title) => set({ titleContent: title }),
  setContent: (content) => set({ content: content }),
}));

export default useContentInfo;
