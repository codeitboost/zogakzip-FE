import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GroupList from './pages/grouplist/GroupList';
import GroupCreate from './pages/groupcreate/GroupCreate';
import GroupDetail from './pages/GroupDetail';
import MemoryUpload from './pages/memoryupload/MemoryUpload';
import MemoryDetail from './pages/MemoryDetail';
import Header from './components/common/header/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<GroupList />} />
        <Route path="/group-create" element={<GroupCreate />} />
        <Route path="/group-detail/:id" element={<GroupDetail />} />
        <Route path="/memory-upload" element={<MemoryUpload />} />
        <Route path="/memory-detail" element={<MemoryDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
