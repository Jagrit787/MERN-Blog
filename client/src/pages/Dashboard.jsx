import DashPosts from '../components/DashPosts'
import DashProfile from '../components/DashProfile'
import DashSidebar from '../components/DashSidebar'
import DashUsers from '../components/DashUsers'
import DashComments from '../components/DashComments'
import DashboardComp from '../components/DashboardComp'
import {useState, useEffect} from 'react'
import {useLocation} from 'react-router-dom'
export default function Dashboard() {
    //TODO: To get what page we are at currently(the ?tab= somepage) this somepage we need to get
  
  const location = useLocation();
  const [tab, setTab] = useState('');
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab');
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
//the second parameter in useEffect is and array of dependencies, the effect is re-run if change in any of the dependencies.

  return (
    <div className='min-h-screen flex flex-col md:flex-row'>
      <div className='md:w-56'>
        {/* Sidebar */}
        <DashSidebar />
      </div>
      
      {/* profile... */}
      {tab === 'profile' && <DashProfile />}
      {/* posts...*/}
      {tab === 'posts' && <DashPosts />}
      {/* users */}
      {tab === 'users' && <DashUsers />}
      {/* comments  */}
      {tab === 'comments' && <DashComments />}
      {/* dashboard comp */}
      {tab === 'dash' && <DashboardComp />}
    </div>
  );
}