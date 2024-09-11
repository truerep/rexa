import {
  one, two, three, four, five, six, seven, eight
} from '@/components/common/animations';

const resumeFacts = [
  "In today’s day and age, a candidate’s resume will always be filtered through the Applicant Tracking System (ATS)",
  "Large companies go straight to the critical details",
  "Resume bullet points have an essential structure",
  "Candidate’s only have an average of 6 seconds to capture a hiring manager’s attention",
  "Soft-skills take a stand",
  "An informal email address can turn off recruiters",
  "The resume should be tailored to the job description",
  "The resume should be in reverse chronological order"
];

const animations = [one, two, three, four, five, six, seven, eight];

const getRandomResumeFactAndAnimation = async () => {
  try {
    const randomResume = Math.floor(Math.random() * resumeFacts.length);
    const randomAnimation = Math.floor(Math.random() * animations.length);
    return {
      facts: resumeFacts[randomResume],
      animations: animations[randomAnimation]
    }
  } catch (err) {
    console.log(err);
  }
};

export default getRandomResumeFactAndAnimation;
