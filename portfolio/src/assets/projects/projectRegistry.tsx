import {jsSearchCardDisplay, jsSearchProjectCode, jsSearchProjectView} from "./jsSearchProject/jsSearchProject"
import {firebaseChatAppCardDisplay, firebaseChatAppProjectCode, firebaseChatAppProjectView} from "./firebaseChatAppProject/firebaseChatAppProject"
import {jsExercicesCardDisplay, jsExercicesProjectCode, jsExercicesProjectView} from "./jsExercicesProject/jsExercicesProject"
import { Project } from "../../modules/interfaces"

const projectRegistry:Map<string, Project> = new Map()
projectRegistry.set("jsSearchProject", {id:"jsSearchProject", display:jsSearchCardDisplay, code:jsSearchProjectCode, view:jsSearchProjectView});
projectRegistry.set("jsExercicesProject", {id:"jsExercicesProject", display:jsExercicesCardDisplay, code:jsExercicesProjectCode, view:jsExercicesProjectView})
projectRegistry.set("firebaseChatAppProject", {id:"firebaseChatAppProject", display:firebaseChatAppCardDisplay, code:firebaseChatAppProjectCode, view:firebaseChatAppProjectView})
projectRegistry.set("firebaseChatAppProject2", {id:"firebaseChatAppProject2", display:firebaseChatAppCardDisplay, code:firebaseChatAppProjectCode, view:firebaseChatAppProjectView})
projectRegistry.set("firebaseChatAppProject3", {id:"firebaseChatAppProject3", display:firebaseChatAppCardDisplay, code:firebaseChatAppProjectCode, view:firebaseChatAppProjectView})
projectRegistry.set("firebaseChatAppProject4", {id:"firebaseChatAppProject4", display:firebaseChatAppCardDisplay, code:firebaseChatAppProjectCode, view:firebaseChatAppProjectView})
// projectRegistry.set("firebaseChatAppProject6", {id:"firebaseChatAppProject6", display:firebaseChatAppCardDisplay, component:firebaseChatAppProject})
// projectRegistry.set("firebaseChatAppProject7", {id:"firebaseChatAppProject7", display:firebaseChatAppCardDisplay, component:firebaseChatAppProject})

export default projectRegistry