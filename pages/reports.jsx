import NavBar from '@/components/NavBar';
import useContentInfo from '@/store/useContent';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Reports() {
  const { content, titleContent } = useContentInfo();
  return (
    <main>
      <div className="front-wrapper">
        <div className="wrapper" id="account-wrapper">
          <NavBar />
          <div id="report-content">
            <div className="row">
              <div className="col-xs-7">
                <div id="doc" data-doc-id="d09300222877623016dd">
                  <div id="doc-title" title="Edit title">
                    {titleContent}
                  </div>
                  <input type="hidden" id="plan_id" defaultValue="pro_monthly" />
                  <input type="hidden" id="rephrase" defaultValue="false" />
                  <input type="hidden" id="showRephraseID" defaultValue="false" />
                  <input type="text" id="doc-title-edit" />
                  <input type="text" id="new-document-title" style={{ display: 'none' }} />
                  <div className="main-report-box" style={{ position: 'relative' }}>
                    <div id="doc-textarea" className="notextarea" style={{ display: 'block' }}>
                      <span id="progress-wrapper" className="doc-finished" data-status={1}>
                        {content}
                      </span>
                    </div>
                    <div
                      id="search-multi"
                      style={{
                        position: 'absolute',
                        top: '10px',
                        left: 'auto',
                        right: '10px',
                        margin: '0px !important',
                        display: 'block',
                      }}
                    >
                      <div
                        className="inlineblock"
                        style={{
                          fontWeight: 300,
                          fontSize: '13px',
                          color: '#94a3ab',
                          background: '#fff',
                          borderRadius: '20px',
                        }}
                        id="postsearch-wordcount"
                      >
                        321 words (Less than 1 page)
                      </div>
                    </div>
                  </div>
                  <textarea
                    id="textarea"
                    className="withtextarea report-page-textarea"
                    style={{ width: '100%', display: 'none' }}
                    defaultValue={''}
                  />
                  <div />
                  <button
                    className="btn btn-primary btn-lg grammar-checker-report-btn"
                    id="editButton"
                    style={{ width: '40%' }}
                  >
                    Edit
                  </button>
                  <div id="accepttextarea" style={{ display: 'none' }} />
                  <button
                    className="btn btn-primary btn-lg grammar-checker-report-btn"
                    id="search"
                    style={{
                      width: '30%',
                      position: 'absolute',
                      top: '-1e15px',
                      left: '-1e15px',
                      opacity: 0,
                      zIndex: -2147483648,
                      display: 'none',
                    }}
                  >
                    Save &amp; Recheck
                  </button>
                  <div className="re-check-btn">
                    <button
                      className="btn btn-lg btn-check-plag btn-report-page-recheck"
                      id="plag-recheck"
                      style={{ display: 'none', background: '#fe5b60 !important', borderColor: '#fe5b60 !important' }}
                    >
                      Check Plagiarism
                    </button>
                    &nbsp;&nbsp;
                    <button
                      className="btn btn-lg btn-check-ai btn-report-page-recheck"
                      id="ai-recheck"
                      style={{ display: 'none', background: '#42ba96 !important' }}
                    >
                      Check AI
                    </button>
                    &nbsp;&nbsp;
                    <button
                      className="btn btn-lg btn-check-plag-ai btn-report-page-recheck"
                      id="plag-ai-recheck"
                      style={{ display: 'none', background: '#2b354e !important' }}
                    >
                      Check Plagiarism and AI
                    </button>
                  </div>
                  <button className="btn btn-primary btn-lg" id="new-search" style={{ width: '30%', display: 'none' }}>
                    New Search
                  </button>
                </div>
              </div>
              <div className="col-xs-5">
                <div id="doc-details">
                  <div id="results-percentage" style={{ display: 'block', height: 'auto' }}>
                    <div className="new-ui-score-main">
                      <div id="top-plag-score" className="top-score-div">
                        <div className="flex items-center justify-center">
                          <img src="/plag-sm-icon.svg" alt="" />
                          Plagiarism
                        </div>
                        <b id="report-page-plag-score">0%</b>
                      </div>
                      <div id="top-annotation-score" className="top-score-div">
                        <div className="flex justify-center items-center">
                          <img src="/anno-sm-icon.svg" alt="" /> Annotations
                        </div>
                        <b id="report-page-anno-score">
                          Total: <span-new className="annotation-count">0</span-new>
                        </b>
                      </div>
                      <div id="top-ai-score" className="top-score-div">
                        <div className="flex justify-center items-center">
                          <img src="/ai-sm-icon.png" alt="" /> AI Score
                        </div>

                        <b id="report-page-ai-score" className="ai-score">
                          N/A
                        </b>
                        <u id="report-page-check-ai-score">Check AI Score</u>
                      </div>
                    </div>
                    <div id="ai-main-result" style={{ display: 'block' }}>
                      <no-template id="ai-top-banner-summary" style={{ display: 'none' }} />
                      <small id="top-banner-pagination-hint">
                        Please use the below arrow keys to see Plagiarism and AI Results
                      </small>
                    </div>
                  </div>
                  <div id="waiting-note" className="hidden">
                    We’re searching billions of files for similar text to your input. This may take some time, depending
                    on the size of your input and other factors.
                    <br />
                    <br />
                    This job will continue even if you leave the page or logout. You can view the status or results of a
                    job in your <Link href="https://www.quetext.com/reports">reports section</Link> at any time.
                  </div>
                  <div id="results-title" className="noselect" style={{ display: 'block' }}>
                    <div id="match-navigator">
                      <i id="nav-prev-match" className="fa fa-angle-left top" aria-hidden="true" />
                      <input type="text" id="current-match-selection" defaultValue="--" />
                      <span id="report-page-counter">--</span>
                      <i id="nav-next-match" className="fa fa-angle-right top" aria-hidden="true" />
                    </div>
                    <div id="num-sources-count">No plagiarism matches</div>
                    <span id="report-page-info" />
                    <div className="pull-right">
                      <div className="dropdown">
                        <a
                          className="btn dropdown-toggle"
                          role="button"
                          id="report-dropdown-menu"
                          data-toggle="dropdown"
                          data-original-title="Menu"
                        >
                          <i className="fa fa-bars" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a className="dropdown-item" id="show-report-info">
                            <i className="fa fa-info-circle" aria-hidden="true" />
                            Summary
                          </a>
                          <a className="dropdown-item" id="show-all-matches">
                            <i className="fa fa-list-alt" aria-hidden="true" />
                            List all matches
                          </a>
                          <a className="dropdown-item" id="download-pdf" data-report-id="d09300222877623016dd">
                            <i className="fa fa-file-pdf-o" aria-hidden="true" />
                            Download Plagiarism Report (PDF)
                          </a>
                          <a
                            className="dropdown-item"
                            id="download-ai-report"
                            data-report-id="d09300222877623016dd"
                            style={{ display: 'none' }}
                          >
                            <i className="fa fa-file-pdf-o" aria-hidden="true" />
                            Download AI Report (PDF)
                          </a>
                          <a className="dropdown-item" id="google-drive-report" data-report-id="d09300222877623016dd">
                            <i className="fa fa-folder-open-o" aria-hidden="true" />
                            Save in Google Drive
                          </a>
                          <a
                            className="dropdown-item report-action-v2 share-report"
                            id="share-report"
                            data-report-id="d09300222877623016dd"
                          >
                            <i className="fa fa-share-alt" aria-hidden="true" />
                            Share
                          </a>
                          <a
                            className="dropdown-item report-action delete-report"
                            id="delete-report"
                            data-target="modal-delete-report"
                          >
                            <i className="fa fa-trash" aria-hidden="true" />
                            Delete report
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="source-actions">
                    <button className="grey source-action hidden" data-source-url id="source-generate-citations">
                      <i className="fa fa-quote-left" aria-hidden="true" /> Cite Source
                    </button>
                    <button className="hidden grey source-action add-annotation" data-source-url data-a-mode="matched">
                      <i className="fa fa-pencil-square-o" aria-hidden="true" /> Annotate
                    </button>
                  </div>
                  <div id="doc-results" style={{ marginTop: '0px' }}>
                    <div className="accordion" id="reportPageAccordion">
                      <div id="acco-plag">
                        <div
                          id="heading1"
                          className="acco-heading acco-heading-plag"
                          data-toggle="collapse"
                          data-target="#collapse1"
                          data-acc-id={1}
                          data-acc-mode="plag"
                        >
                          Plagiarism Matches <i className="fa fa-caret-down" />
                        </div>
                        <div
                          id="collapse1"
                          className="acco-body acco-body-plag  in"
                          data-parent="#reportPageAccordion"
                          style={{ padding: '10px 0px 20px' }}
                        >
                          <div style={{ textAlign: 'center' }} className="no-matches">
                            <Image
                              className="z-10"
                              style={{ width: '80px', height: '80px', margin: '0 auto 10px' }}
                              src={'/Checkmark.png'}
                              width={80}
                              height={80}
                            />

                            <div>No plagiarism found</div>
                          </div>
                        </div>
                      </div>
                      <div id="acco-anno">
                        <div
                          id="heading2"
                          className="acco-heading acco-heading-anno collapsed"
                          data-toggle="collapse"
                          data-target="#collapse2"
                          data-acc-id={2}
                          data-acc-mode="anno"
                        >
                          Annotations <i className="fa fa-caret-down" />
                        </div>
                        <div
                          id="collapse2"
                          className="acco-body acco-body-anno collapse"
                          data-parent="#reportPageAccordion"
                        >
                          <div className="card-annotation-list-group" />
                        </div>
                      </div>
                      <div id="acco-ai">
                        <div
                          id="heading3"
                          className="acco-heading acco-heading-ai collapsed"
                          data-toggle="collapse"
                          data-target="#collapse3"
                          data-acc-id={3}
                          data-acc-mode="ai"
                        >
                          AI Matches <i className="fa fa-caret-down" />
                        </div>
                        <div
                          id="collapse3"
                          className="acco-body acco-body-ai collapse"
                          data-parent="#reportPageAccordion"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    id="rephrased-report-results"
                    style={{
                      height: '70vh',
                      padding: '30px 10px 70px',
                      width: '100%',
                      overflow: 'auto',
                      position: 'relative',
                      display: 'none',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
