import PageBigHeading from "./PageBigHeading"
import SubDescription from "./SubDescripton"
import Form from "./Form"
import PersonalLink from "./PersonalLink"
import PublicMessages from "./PublicMessage"
import InfoIndicator from "./InfoIndicator"

export default function ContactPage()
{
    return (
        <div className="grid gap-5 p-2.5">
          <PageBigHeading bigText={"Get in Touch"}/>
          <SubDescription  subtext={"Leave a message or connect with me on social media"}/>
          <div className="grid place-content-center">
             <div className="grid grid-cols-2 gap-8">
              {/* form  */}
              <div>
                <Form/>
              </div>

              {/* right side two row */}
              <div className="grid gap-4">
                {/* links */}
                <div className="grid border rounded-2xl border-base-300 p-4">
                  <div>
                    <h1 className="text-3xl">Connect</h1>
                  </div>
                  <PersonalLink/>
                </div>
                <div>
                  <PublicMessages/>
                </div>
              </div>
             </div>
          </div>
          <InfoIndicator/>
        </div>
    )
}