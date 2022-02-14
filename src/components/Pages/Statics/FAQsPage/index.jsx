import React from 'react';
import L from 'i18n-react';

const FAQsPage = () => {
  return (
    <section className="page-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <p className="section-title">{L.translate('Statics.FAQ.faqs')}</p>
            <p className="section-subtitle">
              {L.translate('Statics.FAQ.CryoMEX_new_generation')}
            </p>

            <div className="page-content">
              <div className="faq-wrap">
                <div className="row">
                  <div className="col-lg-4">
                    {/* HowRegisterApp */}
                    <div className="faq">
                      <p className="faq__title">
                        {L.translate('Statics.FAQ.HowRegisterApp.title')}
                      </p>
                      <div className="faq__text">
                        <p>
                          {L.translate('Statics.FAQ.HowRegisterApp.t_001')}
                          <br />
                          {L.translate('Statics.FAQ.HowRegisterApp.t_002')}
                        </p>
                        <p>{L.translate('Statics.FAQ.Note.title')}</p>
                        <ul style={{ marginLeft: '19px' }}>
                          <li style={{ listStyleType: 'disc' }}>
                            {L.translate('Statics.FAQ.Note.text')}
                          </li>
                        </ul>
                        <p>
                          {L.translate('Statics.FAQ.HowRegisterApp.t_005')}
                          <br />
                          {L.translate('Statics.FAQ.HowRegisterApp.t_006')}
                        </p>
                        <p>
                          {L.translate('Statics.FAQ.Note.title')}
                          <br />
                          {L.translate('Statics.FAQ.HowRegisterApp.t_007')}
                        </p>
                      </div>
                    </div>

                    {/* HowRegisterEmail */}
                    <div className="faq">
                      <p className="faq__title">
                        {L.translate('Statics.FAQ.HowRegisterEmail.title')}
                      </p>
                      <div className="faq__text">
                        <p>
                          {L.translate('Statics.FAQ.HowRegisterEmail.t_001')}
                          <br />
                          {L.translate('Statics.FAQ.HowRegisterEmail.t_002')}
                        </p>

                        <p>{L.translate('Statics.FAQ.Note.title')}</p>
                        <ul style={{ marginLeft: '19px' }}>
                          <li style={{ listStyleType: 'disc' }}>
                            {L.translate('Statics.FAQ.Note.text')}
                          </li>
                        </ul>
                        <p>
                          {L.translate('Statics.FAQ.HowRegisterEmail.t_003')}
                          <br />
                          {L.translate('Statics.FAQ.HowRegisterEmail.t_004')}
                          <br />
                          {L.translate('Statics.FAQ.HowRegisterEmail.t_005')}
                        </p>

                        <p>
                          {L.translate('Statics.FAQ.Note.title')}
                          <br />
                          {L.translate('Statics.FAQ.HowRegisterEmail.t_006')}
                        </p>
                      </div>
                    </div>

                    {/* ResetPassword */}
                    <div className="faq">
                      <p className="faq__title">
                        {L.translate('Statics.FAQ.ResetPassword.title')}
                      </p>
                      <div className="faq__text">
                        <p>
                          {L.translate('Statics.FAQ.ResetPassword.t_001')}
                          <br />
                          {L.translate('Statics.FAQ.ResetPassword.t_002')}
                          <br />
                          {L.translate('Statics.FAQ.ResetPassword.t_003')}
                        </p>
                        <p>
                          {L.translate('Statics.FAQ.Note.title')}
                          <br />
                          {L.translate('Statics.FAQ.ResetPassword.t_004')}
                          <br />
                          {L.translate('Statics.FAQ.ResetPassword.t_005')}
                        </p>
                        <p>
                          {L.translate('Statics.FAQ.ResetPassword.t_006')}
                          <br />
                          {L.translate('Statics.FAQ.ResetPassword.t_007')}
                        </p>
                      </div>
                    </div>

                    {/* IdentityVerification */}
                    <div className="faq">
                      <p className="faq__title">
                        {L.translate('Statics.FAQ.IdentityVerification.title')}
                      </p>
                      <div className="faq__text">
                        <p>
                          {L.translate(
                            'Statics.FAQ.IdentityVerification.t_001',
                          )}
                          <br />
                          {L.translate(
                            'Statics.FAQ.IdentityVerification.t_002',
                          )}
                          <br />
                          {L.translate(
                            'Statics.FAQ.IdentityVerification.t_003',
                          )}
                        </p>

                        <p>
                          {L.translate(
                            'Statics.FAQ.IdentityVerification.t_004',
                          )}
                          <br />
                          {L.translate(
                            'Statics.FAQ.IdentityVerification.t_005',
                          )}
                          <br />
                          {L.translate(
                            'Statics.FAQ.IdentityVerification.t_006',
                          )}
                          <br />
                          {L.translate(
                            'Statics.FAQ.IdentityVerification.t_007',
                          )}
                        </p>

                        <p>
                          {L.translate(
                            'Statics.FAQ.IdentityVerification.t_008',
                          )}
                          <br />
                          {L.translate(
                            'Statics.FAQ.IdentityVerification.t_009',
                          )}
                          <br />
                          {L.translate(
                            'Statics.FAQ.IdentityVerification.t_010',
                          )}
                        </p>

                        <p>
                          {L.translate(
                            'Statics.FAQ.IdentityVerification.t_011',
                          )}
                        </p>

                        <p>
                          {L.translate(
                            'Statics.FAQ.IdentityVerification.t_012',
                          )}
                        </p>

                        <p>
                          {L.translate(
                            'Statics.FAQ.IdentityVerification.t_013',
                          )}
                        </p>

                        <ul style={{ marginLeft: '19px' }}>
                          <li style={{ listStyleType: 'disc' }}>
                            {L.translate(
                              'Statics.FAQ.IdentityVerification.t_014',
                            )}
                          </li>
                          <li style={{ listStyleType: 'disc' }}>
                            {L.translate(
                              'Statics.FAQ.IdentityVerification.t_015',
                            )}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4">
                    {/* EnableGoogle2FA */}
                    <div className="faq">
                      <p className="faq__title">
                        {L.translate('Statics.FAQ.EnableGoogle2FA.title')}
                      </p>
                      <div className="faq__text">
                        <p>
                          {L.translate('Statics.FAQ.EnableGoogle2FA.t_001')}
                        </p>
                        <p>
                          {L.translate('Statics.FAQ.EnableGoogle2FA.t_002')}
                        </p>
                        <p>
                          {L.translate('Statics.FAQ.EnableGoogle2FA.t_003')}
                          <br />
                          {L.translate('Statics.FAQ.EnableGoogle2FA.t_004')}
                        </p>
                        <p>
                          {L.translate('Statics.FAQ.EnableGoogle2FA.t_005')}
                          <br />
                          {L.translate('Statics.FAQ.EnableGoogle2FA.t_006')}
                        </p>
                        <p>
                          {L.translate('Statics.FAQ.EnableGoogle2FA.t_007')}
                          <br />
                          {L.translate('Statics.FAQ.EnableGoogle2FA.t_008')}
                        </p>
                        <p>
                          {L.translate('Statics.FAQ.EnableGoogle2FA.t_009')}
                          <br />
                          {L.translate('Statics.FAQ.EnableGoogle2FA.t_010')}
                        </p>
                      </div>
                    </div>

                    {/* TwoFAError */}
                    <div className="faq">
                      <p className="faq__title">
                        {L.translate('Statics.FAQ.TwoFAError.title')}
                      </p>
                      <div className="faq__text">
                        <p>{L.translate('Statics.FAQ.TwoFAError.t_001')}</p>
                        <ul style={{ marginLeft: '19px' }}>
                          <li style={{ listStyleType: 'disc' }}>
                            {L.translate('Statics.FAQ.TwoFAError.t_002')}
                          </li>
                          <li style={{ listStyleType: 'disc' }}>
                            {L.translate('Statics.FAQ.TwoFAError.t_003')}
                            (...link....)
                            {L.translate('Statics.FAQ.TwoFAError.t_004')}
                          </li>
                          <li style={{ listStyleType: 'disc' }}>
                            {L.translate('Statics.FAQ.TwoFAError.t_005')}
                          </li>
                          <li style={{ listStyleType: 'disc' }}>
                            {L.translate('Statics.FAQ.TwoFAError.t_006')}
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* ChangeEmail */}
                    <div className="faq">
                      <p className="faq__title">
                        {L.translate('Statics.FAQ.ChangeEmail.title')}
                      </p>
                      <div className="faq__text">
                        <strong>
                          {L.translate('Statics.FAQ.ChangeEmail.t_001')}
                        </strong>
                        <p>
                          {L.translate('Statics.FAQ.ChangeEmail.t_002')}
                          <br />
                          {L.translate('Statics.FAQ.ChangeEmail.t_003')}
                        </p>
                        <strong>
                          {L.translate('Statics.FAQ.ChangeEmail.t_004')}
                        </strong>
                        <p>
                          {L.translate('Statics.FAQ.ChangeEmail.t_005')}
                          <br />
                          {L.translate('Statics.FAQ.ChangeEmail.t_006')}
                          <br />
                          {L.translate('Statics.FAQ.ChangeEmail.t_007')}
                          <br />
                          {L.translate('Statics.FAQ.ChangeEmail.t_008')}
                          <br />
                          {L.translate('Statics.FAQ.ChangeEmail.t_009')}
                        </p>
                      </div>
                    </div>

                    {/* NotReceivingEmails */}
                    <div className="faq">
                      <p className="faq__title">
                        {L.translate('Statics.FAQ.NotReceivingEmails.title')}
                      </p>
                      <div className="faq__text">
                        <p>
                          {L.translate('Statics.FAQ.NotReceivingEmails.t_001')}
                        </p>
                        <p>
                          {L.translate('Statics.FAQ.NotReceivingEmails.t_002')}
                          <br />
                          {L.translate('Statics.FAQ.NotReceivingEmails.t_003')}
                        </p>
                      </div>
                    </div>

                    {/* DepositCryptos */}
                    <div className="faq">
                      <p className="faq__title">
                        {L.translate('Statics.FAQ.DepositCryptos.title')}
                      </p>
                      <div className="faq__text">
                        <p>
                          {L.translate('Statics.FAQ.DepositCryptos.t_001')}
                          (...link...)
                          {L.translate('Statics.FAQ.DepositCryptos.t_002')}
                          <br />
                          {L.translate('Statics.FAQ.DepositCryptos.t_004')}
                          <br />
                          {L.translate('Statics.FAQ.DepositCryptos.t_005')}
                        </p>
                        <p>{L.translate('Statics.FAQ.DepositCryptos.t_005')}</p>
                        <ul style={{ marginLeft: '19px' }}>
                          <li style={{ listStyleType: 'disc' }}>
                            {L.translate('Statics.FAQ.DepositCryptos.t_006')}
                          </li>
                          <li style={{ listStyleType: 'disc' }}>
                            {L.translate('Statics.FAQ.DepositCryptos.t_007')}
                          </li>
                        </ul>
                        <p>{L.translate('Statics.FAQ.DepositCryptos.t_008')}</p>
                        <p>{L.translate('Statics.FAQ.DepositCryptos.t_009')}</p>
                        <p>{L.translate('Statics.FAQ.DepositCryptos.t_010')}</p>
                        <p>{L.translate('Statics.FAQ.DepositCryptos.t_011')}</p>
                        <p>{L.translate('Statics.FAQ.DepositCryptos.t_012')}</p>
                        <p>{L.translate('Statics.FAQ.DepositCryptos.t_013')}</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4">
                    {/* DepositNotCredited */}
                    <div className="faq">
                      <p className="faq__title">
                        {L.translate('Statics.FAQ.DepositNotCredited.title')}
                      </p>
                      <div className="faq__text">
                        <p>
                          {L.translate('Statics.FAQ.DepositNotCredited.t_001')}
                        </p>
                        <p>
                          {L.translate('Statics.FAQ.DepositNotCredited.t_002')}
                        </p>
                        <p>
                          {L.translate('Statics.FAQ.DepositNotCredited.t_003')}
                        </p>
                        <ul style={{ marginLeft: '19px' }}>
                          <li style={{ listStyleType: 'disc' }}>
                            {L.translate(
                              'Statics.FAQ.DepositNotCredited.t_004',
                            )}
                          </li>
                          <li style={{ listStyleType: 'disc' }}>
                            {L.translate(
                              'Statics.FAQ.DepositNotCredited.t_005',
                            )}
                          </li>
                          <li style={{ listStyleType: 'disc' }}>
                            {L.translate(
                              'Statics.FAQ.DepositNotCredited.t_006',
                            )}
                          </li>
                        </ul>
                        <p>
                          {L.translate('Statics.FAQ.DepositNotCredited.t_007')}
                        </p>
                      </div>
                    </div>

                    {/* IncorrectDeposit */}
                    <div className="faq">
                      <p className="faq__title">
                        {L.translate('Statics.FAQ.IncorrectDeposit.title')}
                      </p>
                      <div className="faq__text">
                        <p>
                          {L.translate('Statics.FAQ.IncorrectDeposit.t_001')}
                        </p>
                        <p>
                          {L.translate('Statics.FAQ.IncorrectDeposit.t_002')}
                        </p>
                        <ul style={{ marginLeft: '19px' }}>
                          <li style={{ listStyleType: 'disc' }}>
                            {L.translate('Statics.FAQ.IncorrectDeposit.t_003')}
                          </li>
                          <li style={{ listStyleType: 'disc' }}>
                            {L.translate('Statics.FAQ.IncorrectDeposit.t_004')}
                          </li>
                          <li style={{ listStyleType: 'disc' }}>
                            {L.translate('Statics.FAQ.IncorrectDeposit.t_005')}
                          </li>
                          <li style={{ listStyleType: 'disc' }}>
                            {L.translate('Statics.FAQ.IncorrectDeposit.t_006')}
                          </li>
                        </ul>
                        <p>
                          {L.translate('Statics.FAQ.IncorrectDeposit.t_007')}
                        </p>
                        <p>
                          {L.translate('Statics.FAQ.IncorrectDeposit.t_008')}
                        </p>
                      </div>
                    </div>

                    {/* Withdraw */}
                    <div className="faq">
                      <p className="faq__title">
                        {L.translate('Statics.FAQ.Withdraw.title')}
                      </p>
                      <div className="faq__text">
                        <p>
                          {L.translate('Statics.FAQ.Withdraw.t_001')}
                          (...link...)
                          {L.translate('Statics.FAQ.Withdraw.t_002')}
                          <br />
                          {L.translate('Statics.FAQ.Withdraw.t_003')}
                          <br />
                          {L.translate('Statics.FAQ.Withdraw.t_004')}
                          <br />
                          {L.translate('Statics.FAQ.Withdraw.t_005')}
                        </p>
                      </div>
                    </div>

                    {/* SecuringAccount */}
                    <div className="faq">
                      <p className="faq__title">
                        {L.translate('Statics.FAQ.SecuringAccount.title')}
                      </p>
                      <div className="faq__text">
                        <p>
                          {L.translate('Statics.FAQ.SecuringAccount.t_001')}
                        </p>
                        <p>
                          {L.translate('Statics.FAQ.SecuringAccount.t_002')}
                          <br />
                          {L.translate('Statics.FAQ.SecuringAccount.t_003')}
                        </p>
                        <p>
                          {L.translate('Statics.FAQ.SecuringAccount.t_004')}
                          <br />
                          {L.translate('Statics.FAQ.SecuringAccount.t_005')}
                        </p>
                        <p>
                          {L.translate('Statics.FAQ.SecuringAccount.t_006')}{' '}
                          (...link...)
                          <br />
                          {L.translate('Statics.FAQ.SecuringAccount.t_007')}
                        </p>
                        <p>
                          {L.translate('Statics.FAQ.SecuringAccount.t_008')}
                          <br />
                          {L.translate('Statics.FAQ.SecuringAccount.t_009')}
                        </p>
                        <p>
                          {L.translate('Statics.FAQ.SecuringAccount.t_010')}
                          <br />
                          {L.translate('Statics.FAQ.SecuringAccount.t_011')}
                        </p>
                        <p>
                          {L.translate('Statics.FAQ.SecuringAccount.t_012')}
                          <br />
                          {L.translate('Statics.FAQ.SecuringAccount.t_013')}
                        </p>
                        <p>
                          {L.translate('Statics.FAQ.SecuringAccount.t_014')}
                          <br />
                          {L.translate('Statics.FAQ.SecuringAccount.t_015')}
                        </p>
                        <p>
                          {L.translate('Statics.FAQ.SecuringAccount.t_016')}
                        </p>
                        <p>
                          {L.translate('Statics.FAQ.SecuringAccount.t_017')}
                          <br />
                          {L.translate('Statics.FAQ.SecuringAccount.t_018')}
                        </p>
                        <p>
                          {L.translate('Statics.FAQ.SecuringAccount.t_019')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQsPage;
