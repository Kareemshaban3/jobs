/** @format */

import { useRef, useState } from "react";
import TopPage from "./TopPage";
import SelectField from "../ui/Layout/form-elements/SelectField";
import useGetNationalities from "../hooks/app/useGetNationalities";
import useGetExperience from "../hooks/app/useGetExperience";
import useGetCountries from "../hooks/app/useGetCountries";
import useGetSkillsJobs from "../hooks/app/useGetSkillsJobs";
import useGetMainCategory from "../hooks/app/useGetMainCategory";
export default function CvResumes() {
  const { data: nationalities } = useGetNationalities();
  const { data: countries } = useGetCountries();
  const { data: Experience } = useGetExperience();
  const { data: SkillsJobs } = useGetSkillsJobs();
  const { data: MainCategory } = useGetMainCategory();
  const [image, setImage] = useState("/images/joblogo.webp");
  const fileInputRef = useRef(null);

  console.log(MainCategory);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <>
      <TopPage
        title={"Craft Your Resume"}
        description={"Shape your professional narrative with ease"}
      />
      <br />
      <div className='CvResumes'>
        <div className='container'>
          <div className='General'>
            <div className='wrapper'>
              <ul className='navUl'>
                <li>
                  <button className='navItem'>
                    <span className='step'>1</span>
                    General Info
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className='col-12 p-2'>
            <div className='tab-content'>
              <div className='text'>
                <h6>Your Personal Info</h6>
              </div>
              <div className='displayImg'>
                <div className='birder'>
                  <div className=''>
                    <img src={image} alt='' onClick={handleImageClick} />
                  </div>
                  <h2 onClick={handleImageClick}>+</h2>
                  <input
                    type='file'
                    accept='image/*'
                    onChange={handleImageChange}
                    style={{ display: "none" }}
                    ref={fileInputRef}
                  />
                </div>
              </div>
            </div>
            <div className='form'>
              <form>
                <div className='input'>
                  <input type='text' placeholder='Name' required />
                  <span>Name</span>
                </div>
                <div className='input'>
                  <textarea placeholder='speak about yourself,your job and years of experience '></textarea>
                  <span>Bio</span>
                </div>
                <div className='inputs'>
                  <div className='input'>
                    <input type='date' />
                    <span>Birthday</span>
                  </div>

                  <div className='input'>
                    <SelectField
                      label={"Gender"}
                      name={"select"}
                      options={[
                        { label: "Male", value: "Male" },
                        { label: "Female", value: "Female" },
                      ]}
                    />
                  </div>
                </div>

                <div className='inputs'>
                  <div className='input'>
                    <SelectField
                      label={"Nationality"}
                      name={"Choose"}
                      options={nationalities?.map((nationality) => ({
                        label: nationality.name,
                        value: nationality.id,
                      }))}
                    />
                  </div>

                  <div className='input'>
                    <SelectField
                      label={"Marital Status"}
                      name={"Choose"}
                      options={[
                        { label: "Single", value: "Single" },
                        { label: "Married", value: "Married" },
                      ]}
                    />
                  </div>
                  <div className='input'>
                    <SelectField
                      label={"Religion"}
                      name={"Choose"}
                      options={[
                        { label: "Muslim", value: "Single" },
                        { label: "non Muslim", value: "Married" },
                      ]}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className='col-12 p-2 content2 '>
            <h6>
              What are the job titles that describe what you are looking for?
            </h6>
            <div className='inputs'>
              <div className='input'>
                <SelectField
                  label={"Religion"}
                  name={"Choose"}
                  options={MainCategory?.map((category) => ({
                    label: category.name,
                    value: category.id,
                  }))}
                />
              </div>
              <div className='input'>
                <SelectField
                  label={"Sub Category ( Job )"}
                  name={"Choose"}
                  options={SkillsJobs?.map((jobSkill) => ({
                    label: jobSkill.name,
                    value: jobSkill.id,
                  }))}
                />
              </div>
            </div>
          </div>
          <div className='col-12 p-2 '>
            <h6>How many years of experience do you have?</h6>

            <div className='input'>
              <SelectField
                label={"Experience"}
                name={"Choose"}
                options={Experience?.map((experience) => ({
                  label: experience.title,
                  value: experience.id,
                }))}
              />
            </div>
          </div>
          <div className='col-12 p-2 '>
            <h6>Your Location</h6>

            <div className='input'>
              <SelectField
                label={"Country"}
                name={"Choose"}
                options={countries?.map((country) => ({
                  label: country.parent,
                  value: country.id,
                }))}
              />
            </div>
          </div>
          <div className='col-12 p-2 '>
            <h6>Your Contact Info</h6>
            <div className='from'>
              <form action=''>
                <div className='inputs'>
                  <div className='Phone'>
                    <SelectField
                      label={"Country"}
                      name={+966}
                      options={nationalities?.map((phone) => ({
                        label: phone.phone_code,
                        value: phone.id,
                      }))}
                    />
                  </div>
                  <div className='number'>
                    <input type='number' placeholder='Phone Number' required />
                    <span>Phone</span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
