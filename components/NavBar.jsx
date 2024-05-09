import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const NavBar = () => {
  const router = useRouter();

  const pathname = router.pathname.split('/')[1];
  return (
    <div id="account-nav" className="collapsed">
      <div id="app-logo">
        <Link href="/search">
          <img src="/app-icon.svg" className="app_logo_css" id="toggle" />
        </Link>
      </div>
      <div id="nav-buttons">
        <Link
          href="/search"
          className={`${pathname === 'search' ? 'current flex flex-col items-center justify-center shadow-lg p-4' : 'flex flex-col items-center justify-center shadow-lg p-4'} `}
          id="user-search-leftnav"
        >
          <span className="icon right" data-toggle="tooltip" data-original-title="New Search">
            <img src="/search_2.svg" />
          </span>
          <span className="side-nav-label">Search</span>
        </Link>
        <Link
          href="/reports"
          className={`${pathname === 'reports' ? 'current flex flex-col items-center justify-center shadow-lg p-4' : 'flex flex-col items-center justify-center shadow-lg p-4'} `}
          id="user-reports-leftnav"
        >
          <span className="icon right" data-toggle="tooltip" data-original-title="All Reports">
            <img src="/folder2-open.svg" />
          </span>
          <span className="side-nav-label">Reports</span>
        </Link>
        <Link
          href="https://www.quetext.com/reports-folder"
          className="flex flex-col items-center justify-center shadow-lg p-4"
          id="user-reports-folder-leftnav"
        >
          <span className="icon right" data-toggle="tooltip" data-original-title="Folder Reports">
            <img src="/card-list.svg" />
          </span>
          <span className="side-nav-label">Folders</span>
        </Link>
        <Link
          href="https://www.quetext.com/citations"
          className="flex flex-col items-center justify-center shadow-lg p-4"
          id="citation-generator-leftnav"
        >
          <span className="icon right" data-toggle="tooltip" data-original-title="Citation Generator">
            <img src="/chat-square-quote.svg" />
          </span>
          <span className="side-nav-label">Citations</span>
        </Link>
        <Link
          href="https://www.quetext.com/account/settings"
          className="flex flex-col items-center justify-center shadow-lg p-4"
          id="user-account-leftnav"
        >
          <span className="icon right" data-toggle="tooltip" data-original-title="Account">
            <img src="/person-circle.svg" />
          </span>
          <span className="side-nav-label">
            Account
            {/* <qt-badge className="acc-nav-badge-new">New Feature!</qt-badge> */}
          </span>
        </Link>
        <div dangerouslySetInnerHTML={{ __html: '\n            ' }} />
        <a
          style={{ position: 'fixed', top: 'auto', bottom: '20px', right: 'auto', left: 0, width: '80px' }}
          className="flex flex-col items-center justify-center  text-white rounded-full shadow-lg p-4"
        >
          <span
            className="icon right"
            style={{ fontSize: '18px', color: '#fff', fontWeight: 700 }}
            data-toggle="tooltip"
            data-original-title="Redo Site Tour"
          >
            <img src="/eye.svg" />
          </span>
          <span className="side-nav-label">Tour</span>
        </a>
      </div>
    </div>
  );
};

export default NavBar;
