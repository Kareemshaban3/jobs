/** @format */

import TopPage from "../components/TopPage";

export default function Privacy() {
  return (
    <>
      <TopPage
        title='Explore Our Privacy Policy'
        description='Understand the guidelines and agreements'
      />

      <br />
      <br />
      <div className='privacy'>
        <div className='container'>
          <h2>Privacy Policy</h2>
          <p>Privacy Policy</p>
          <div className='ol'>
            <p>
              Privacy and confidentiality statement: We appreciate your concerns
              and interest regarding the privacy of your data online. This
              policy has been prepared to help you understand the nature of the
              data we collect from you when you visit our website and how we
              handle this personal data.
            </p>
            <ol>
              <li>
                Browsing: We did not design this platform to collect your
                personal data from your computer or mobile device while you
                browse the site; rather, the data you provide will only be used
                with your knowledge and consent.
              </li>
              <li>
                . Internet Protocol (IP) Address: Whenever you visit any website
                or platform, including this one, the hosting server will record
                your Internet Protocol (IP) address, the date and time of the
                visit, the type of web browser you are using, and the URL of any
                website that referred you to this site on the network.
              </li>
              <li>
                {" "}
                Links to other websites on the Internet: Our site may include
                links to other websites on the Internet. We do not consider
                ourselves responsible for those sites; you can review the
                privacy policies and content of those sites accessed through any
                link within this site.
              </li>
              <li>
                Disclosure of Information: We will always maintain the privacy
                and confidentiality of all personal data that we obtain. This
                information will only be disclosed if required by any law or
                when we believe in good faith that such action would be
                necessary or desirable to comply with the law, or to defend or
                protect the proprietary rights of this platform or its
                beneficiaries.
              </li>
              <li>
                {" "}
                The necessary data to carry out the transactions requested by
                you: when we need any specific data from you, we will ask you to
                provide it voluntarily. This information will help us contact
                you and fulfill your requests wherever possible. Your data
                provided will never be sold to any third party for marketing
                purposes without your prior written consent, unless it is done
                on the basis that it is part of aggregated data used for
                statistical purposes and research, without including any
                information that could be used to identify you.
              </li>
              <li>
                When you contact us, all data provided by you will be treated as
                confidential. The models submitted directly online require data
                that will help us improve our site.The data you provide will be
                used to respond to all your inquiries, comments, or requests by
                this site or any of its affiliated sites.
              </li>
              <li>
                {" "}
                Disclosure of information to any third party: We will not sell,
                trade, lease, or disclose any information for the benefit of a
                third party outside of this platform or its affiliated platforms
                and websites.
              </li>
              <li>
                . Amendments to the Privacy Policy: We reserve the right to
                modify the terms and conditions of the Privacy Policy as
                necessary and whenever appropriate. The amendments will be
                implemented here or on the main privacy policy page, and you
                will be continuously informed about the data we have obtained,
                how we will use it, and the entities to which we will provide
                this data.
              </li>
              <li>
                Contact us: You can reach out to us when needed by clicking on
                the Contact Us link available in the platform s links or by
                sending an email to info@jobsinsaudi.me.
              </li>
            </ol>
            <br />
          </div>
          <p>
            Note: The Arabic version of this policy shall prevail in the event
            of any discrepancies in the translation into other languages.
          </p>
          <p>
            Finally, your concerns and interest regarding data confidentiality
            and privacy are of utmost importance to us. We hope that this will
            be achieved through this policy.
          </p>
        </div>
      </div>
    </>
  );
}
