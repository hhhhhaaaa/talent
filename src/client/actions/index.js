import { FETCH_LEARNERS, SET_SKILLS, DONE_LOADING, SEARCH_BY_SKILL, SEARCH_BY_NAME } from './types';

function fetchLearners(allLearners) {
  return {
    loading: true,
    payload: allLearners,
    type: FETCH_LEARNERS,
  };
}

function setSkills(allSkills) {
  return {
    skills: allSkills,
    type: SET_SKILLS,
  };
}

function doneLoading() {
  return {
    loading: false,
    type: DONE_LOADING,
  };
}

function searchBySkill() {
  return {
    payload: true,
    type: SEARCH_BY_SKILL,
  };
}

function searchByName() {
  return {
    payload: true,
    type: SEARCH_BY_NAME,
  };
}

export { fetchLearners, setSkills, doneLoading, searchBySkill, searchByName };
