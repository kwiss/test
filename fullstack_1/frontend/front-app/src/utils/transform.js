export const transformToD3Hierarchy = objectives => {
  objectives.forEach(currObjective => {
    if (currObjective.hasOwnProperty("parent_id")) {
      const parent = objectives.find(obj => obj.id === currObjective.parent_id);
      if (!parent.hasOwnProperty("children")) {
        parent.children = [];
      }
      parent.children.push(currObjective);
    }
  });
  return objectives.find(objective => !objective.parentId);
};
