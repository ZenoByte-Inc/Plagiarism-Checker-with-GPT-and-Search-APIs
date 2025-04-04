import useContentInfo from '@/store/useContent';
import Link from 'next/link';
import { useRouter } from 'next/router';
import NavBar from '@/components/NavBar';
import axios from 'axios';
import { useRef } from 'react';
import { textToBase64 } from '@/utils/common';

function Search() {
  const { content, setContent, setTitleContent } = useContentInfo();
  const textareaRef = useRef(null);
  const router = useRouter();

  const handleChangeText = (e) => {
    setContent(e.target.value || '');
  };

  const handleClickButton = async (e) => {
    e.preventDefault();
    const text = textareaRef.current.value;
    if (!text.trim()) return;
    const title = text.split(' ').slice(0, 5).join(' ') + '...';
    setTitleContent(title);
    const {
      data: { access_token },
    } = await axios.post('/api/copyleaks/auth');

    // 3. Gửi file để scan

    const base64 = await textToBase64(text);
    console.log('🚀 ~ handleClickButton ~ base64:', base64);
    const { data } = await axios.post(
      '/api/copyleaks/submit',
      { base64: base64, filename: `file.txt` },
      { headers: { Authorization: `Bearer ${access_token}` } },
    );
    console.log('Scan submitted:', data);
    router.push('/reports');
  };

  return (
    <main>
      <div className="front-wrapper">
        <div className="wrapper" id="account-wrapper">
          <input id="isUserFree" type="hidden" defaultValue="pro_monthly" />
          <div id="mobile-account-nav" className="mobile p-1" style={{ background: '#422fe3' }}>
            <img src="/app-icon.svg" className="app_logo_css" id="toggle" />
          </div>
          <NavBar />

          <div id="modal-feedback" className="modal fade" tabIndex={-1} role="dialog">
            <div className="modal-dialog modal-sm" role="document">
              <div className="modal-header">Wishlist feature or Share feedback</div>
              <div className="modal-body">
                <label style={{ display: 'block' }} id="user-feedback-label">
                  <textarea id="user-feedback" className="general-field autofocus" rows={8} defaultValue={''} />
                  <span className="form-error-msg" id="feedback-error" />
                </label>
              </div>
              <div className="modal-footer">
                <button id="confirm-feedback" className="modal-button blue">
                  Send
                </button>
                <button id="cancel-feedback" className="modal-button grey" data-dismiss="modal">
                  Cancel
                </button>
              </div>
            </div>
          </div>
          <div id="account-content">
            <div id="main-multi-input">
              <div id="multi-input">
                <div className="mb-4 text-center top-b-main">
                  <div>
                    <div id="ai-banner-main">
                      <Link
                        href="https://www.quetext.com/ai-detector"
                        id="top-fixed-bar"
                        className="navbar-light"
                        target="_blank"
                      >
                        <span className="span-123">
                          <img className="santa-img-sub-user" src="./New search_files/santa.png" alt="" />
                          <span>Check out our NEW AI Content Detection Feature</span>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div>
                  <input type="text" id="new-document-title" placeholder="Report Title (optional)" />
                </div>
                <div id="input-wrapper" style={{ position: 'relative' }}>
                  <div id="selected-upload-files" />
                  <div id="instruction-overlay" className={textareaRef?.current?.value ? '' : 'visible'}>
                    <object className="loading-ring hidden" type="image/svg+xml" data="./New search_files/ring.svg" />
                    <span id="copy-paste" className>
                      Enter Your Text Here{' '}
                    </span>
                  </div>
                  <qt-main-div
                    style={{
                      direction: 'ltr !important',
                      zIndex: 'auto !important',
                      float: 'left !important',
                      display: 'inline !important',
                      width: '0px !important',
                      height: '0px !important',
                      top: '0px !important',
                      left: '0px !important',
                      position: 'relative !important',
                      visibility: 'visible !important',
                      overflow: 'visible !important',
                    }}
                  ></qt-main-div>
                  <textarea
                    id="textarea"
                    spellCheck="false"
                    ref={textareaRef}
                    onChange={handleChangeText}
                    autoCorrect="off"
                    data-qt-gc-id="qt-gc-1714997442495"
                    style={{ backgroundColor: 'transparent !important', position: 'relative !important' }}
                    defaultValue={''}
                  />
                </div>
                <div id="search-multi" style={{ display: 'none' }}>
                  <div className="gc-check-div">
                    <span className="text-muted gc-check-btn">Check Grammar</span>
                  </div>
                  <div>
                    <div className="inlineblock" id="presearch-wordcount" />
                    <div id="gc-select-languge-main" className="inlineblock">
                      <select className="lang-list">
                        <option value="en-us" data-thumbnail="https://www.quetext.com/img/flag/us.png">
                          English (US)
                        </option>
                        <option value="en-au" data-thumbnail="https://www.quetext.com/img/flag/au.png">
                          English (Australia)
                        </option>
                        <option value="en-gb" data-thumbnail="https://www.quetext.com/img/flag/gb.png">
                          English (British)
                        </option>
                        <option value="en-ca" data-thumbnail="https://www.quetext.com/img/flag/ca.png">
                          English (Canada)
                        </option>
                        <option value="en-nz" data-thumbnail="https://www.quetext.com/img/flag/nz.png">
                          English (New Zealand)
                        </option>
                        <option value="en-za" data-thumbnail="https://www.quetext.com/img/flag/za.png">
                          English (South Africa)
                        </option>
                        <option value="fr" data-thumbnail="https://www.quetext.com/img/flag/fr.png">
                          French
                        </option>
                        <option value="es" data-thumbnail="https://www.quetext.com/img/flag/es.png">
                          Spanish
                        </option>
                        <option value="de-de" data-thumbnail="https://www.quetext.com/img/flag/de.png">
                          German
                        </option>
                        <option value="it" data-thumbnail="https://www.quetext.com/img/flag/it.png">
                          Italian
                        </option>
                        <option value="pt-pt" data-thumbnail="https://www.quetext.com/img/flag/pt.png">
                          Portuguese
                        </option>
                        <option value="pl-pl" data-thumbnail="https://www.quetext.com/img/flag/pl.png">
                          Polish
                        </option>
                        <option value="ro-ro" data-thumbnail="https://www.quetext.com/img/flag/ro.png">
                          Romanian
                        </option>
                        <option value="nl" data-thumbnail="https://www.quetext.com/img/flag/nl.png">
                          Dutch
                        </option>
                      </select>
                      <div className="lang-select">
                        <button className="btn-select" id="gc-select-lang-val" value="en-us">
                          <li data-lang-code="en-us">
                            <img src="./New search_files/us.png" alt="" value="en-us" />
                            <span> English (US) </span>
                          </li>
                        </button>
                        <div className="b" style={{ display: 'none' }}>
                          <ul id="a">
                            <li data-lang-code="en-us">
                              <img src="./New search_files/us.png" alt="" value="en-us" />
                              <span> English (US) </span>
                            </li>
                            <li data-lang-code="en-au">
                              <img src="./New search_files/au.png" alt="" value="en-au" />
                              <span>English (Australia)</span>
                            </li>
                            <li data-lang-code="en-gb">
                              <img src="./New search_files/gb.png" alt="" value="en-gb" />
                              <span> English (British) </span>
                            </li>
                            <li data-lang-code="en-ca">
                              <img src="./New search_files/ca.png" alt="" value="en-ca" />
                              <span> English (Canada) </span>
                            </li>
                            <li data-lang-code="en-nz">
                              <img src="./New search_files/nz.png" alt="" value="en-nz" />
                              <span>English (New Zealand)</span>
                            </li>
                            <li data-lang-code="en-za">
                              <img src="./New search_files/za.png" alt="" value="en-za" />
                              <span>English (South Africa)</span>
                            </li>
                            <li data-lang-code="fr">
                              <img src="./New search_files/fr.png" alt="" value="fr" />
                              <span> French </span>
                            </li>
                            <li data-lang-code="es">
                              <img src="./New search_files/es.png" alt="" value="es" />
                              <span> Spanish </span>
                            </li>
                            <li data-lang-code="de-de">
                              <img src="./New search_files/de.png" alt="" value="de-de" />
                              <span> German </span>
                            </li>
                            <li data-lang-code="it">
                              <img src="./New search_files/it.png" alt="" value="it" />
                              <span> Italian </span>
                            </li>
                            <li data-lang-code="pt-pt">
                              <img src="./New search_files/pt.png" alt="" value="pt-pt" />
                              <span> Portuguese </span>
                            </li>
                            <li data-lang-code="pl-pl">
                              <img src="./New search_files/pl.png" alt="" value="pl-pl" />
                              <span> Polish </span>
                            </li>
                            <li data-lang-code="ro-ro">
                              <img src="./New search_files/ro.png" alt="" value="ro-ro" />
                              <span> Romanian </span>
                            </li>
                            <li data-lang-code="nl">
                              <img src="./New search_files/nl.png" alt="" value="nl" />
                              <span> Dutch </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="inlineblock" id="grammar-checker-error-btn">
                      <span
                        id="qt-count-1714997442495"
                        className="fixed-qt-gc-spinner"
                        style={{ pointerEvents: 'auto' }}
                      >
                        <span
                          id="qt-fixed-error-count-1714997442495"
                          className="show-error-count"
                          style={{ fontSize: '16px', borderColor: '#43a047', color: '#43a047' }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            fill="currentColor"
                            className="bi bi-check2"
                            viewBox="0 0 16 16"
                          >
                            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                          </svg>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                {content ? null : (
                  <div id="upload">
                    <span id="or-upload">or</span>
                    <button id="upload-file" className="btn grey">
                      <i className="fa fa-upload" />
                      Search by Files
                    </button>
                    <input id="upload-file-input" type="file" name="uploads[]" multiple="multiple" />
                  </div>
                )}

                <div id="search-buttons" style={{ display: 'none' }}>
                  <button
                    id="search"
                    style={{ display: 'none !important' }}
                    data-orig-button="Check Plagiarism"
                    className="inlineblock blue search btn-check-plag-ai"
                  >
                    Check Plagiarism and AI
                  </button>
                </div>

                <hr />
                <div>
                  <button
                    style={{
                      fontSize: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto',
                    }}
                    data-toggle="modal"
                    data-target="#modal_exclude_sources"
                    type="button"
                    className="btn btn-primary"
                  >
                    <i className="fa fa-plus" aria-hidden="true" />
                    Exclude Sources
                  </button>
                </div>
              </div>
              <div className="side-search-btn-group" style={{ marginTop: '60px' }}>
                <button className="btn btn-primary blue btn-check-plag" type="button" onClick={handleClickButton}>
                  Check Plagiarism
                  <br />
                  <small>(70,929 words left)</small>
                </button>
                <button className="btn btn-primary blue btn-check-ai" type="button" onClick={handleClickButton}>
                  Check AI
                  <br />
                  <small>(1,000 words left)</small>
                </button>
                <button className="btn btn-primary blue btn-check-plag-ai" type="button" onClick={handleClickButton}>
                  Check <br />
                  Plagiarism <br />
                  and AI
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Search;
