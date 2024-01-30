import React from "react";
import { BtnState, CurrentMedia, SectionState } from "./enums";


export interface VerticalCarouselProp
{
    sectionState: SectionState
    originId: string
}

export interface GeneralMenuProp
{
    sectionState: SectionState
}

export interface MainNavBarProp {
    state: string,
    setState: React.Dispatch<React.SetStateAction<string>>,
    previousState: string
    isDesktop: boolean
}

export interface button {
    id: string;
    className: string;
    btnState: BtnState;
}

export interface Project {
    id:string,
    display:string,
    code: (() => JSX.Element)
    view: (() => JSX.Element)
}

export interface StringBtnProp
{
    state: string,
    setState: React.Dispatch<React.SetStateAction<string>>,
    previousState: string
    isDesktop: boolean
}

export interface CarouselItemProp
{
    state: string,
    setState: React.Dispatch<React.SetStateAction<string>>,
    currentProject: string,
    setCurrentProject: React.Dispatch<React.SetStateAction<string>>,
    index: number,
    maxIndex: number,
    carouselSize: number,
    indexRef: number,
    project: Project,
    carouselDirection: boolean | null,
    setCarouselDirection: React.Dispatch<React.SetStateAction<boolean | null>>
    rerenderCount: number,
    setRerenderCount: React.Dispatch<React.SetStateAction<number>>
}

export interface FinalMenuProps
{
    project: Project,
    state: string,
    setState: React.Dispatch<React.SetStateAction<string>>
    previousState: string
}