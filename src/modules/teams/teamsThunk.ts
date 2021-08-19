import {createAsyncThunk} from "@reduxjs/toolkit";
import {teams} from "../../api/requests/team";
import {imageRequest} from "../../api/requests/image";

import {IAddTeam, IAddTeamRequest, ITeam, IUpdateTeamRequest} from "../../api/dto/ITeam";

export const getTeams = createAsyncThunk("Team/GetTeams", () => {
    return teams.getTeams();
});

export const getTeam = createAsyncThunk<ITeam, { id: number }>(
    "Team/Get",
    ({id}) => {
        return teams.getTeam(id);
    }
);

export const saveImage = createAsyncThunk<string, FormData>(
    "Image/setImage",
    (formData) => {
        return imageRequest.save(formData);
    }
);

export const addTeam = createAsyncThunk<IAddTeam, IAddTeamRequest>(
    "team/addUpdateTeam",
    async ({name, foundationYear, division, conference, imageUrl}) => {
        const formData = new FormData();
        formData.append("file", imageUrl);
        let image = "";
        if (formData) {
            image = await imageRequest.save(formData);
        }
        return teams.addTeam({
            name,
            foundationYear,
            division,
            conference,
            imageUrl: image,
        });
    }
);
export const updateTeamThunk = createAsyncThunk<ITeam, IUpdateTeamRequest>(
    "team/updateTeam",
    async ({id, imageUrl, ...data}) => {
        var image = "";
        //@ts-ignore

        if (imageUrl instanceof File) {

            const formData = new FormData();
            formData.append("file", imageUrl);

            if (formData) {
                image = await imageRequest.save(formData);
            }
        } else {
            image = imageUrl;
        }

        return teams.updateTeam({
            id,
            imageUrl: image,
            ...data,
        });
    }
);

export const deleteTeam = createAsyncThunk<ITeam, { id: number }>(
    "Team/Delete",
    ({id}) => {
        return teams.deleteTeam(id);
    }
);
