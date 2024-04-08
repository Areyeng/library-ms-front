"use client";
import React, { FC, PropsWithChildren, useContext, useReducer } from 'react';
import eventReducer from './reducer';
import { EventActionContext, EventStateContext, INITIAL_STATE } from './context';
import axios from 'axios';
import { EventDetails } from './interface';
import { message } from 'antd';
import { getData, postData } from '@/utils/api';
import { access } from 'fs';

interface EventProviderProps {
    children: React.ReactNode;
}
export function getAxiosInstance (accessToken: string | null){
    const baseUrl=process.env.NEXT_PUBLIC_API_URL;
    const instance = axios.create({
        baseURL: baseUrl,
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      });
      return instance;
}

const EventProvider: React.FC<EventProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(eventReducer, INITIAL_STATE);
    const token = localStorage.getItem('accessToken');
    const instance = getAxiosInstance(token);

    const AddEvent = async (eventDetails: EventDetails) => {
        try {

            await postData('/Event/CreateEvent', eventDetails).then((resp) => {
                if (resp.data) {
                    message.success("Added event succesfully");
                } else {
                   

                }
            })
        } catch (error) {
            console.log("Error");
            message.error("Event not added")
        }

    }
    const GetEvent = async (eventId:any) => {
        try {
            // Assuming 'getData' is a function that sends a GET request to the server
            await getData(`/Event/Get/${eventId}`).then((resp) => {
                if (resp.data) {
                    dispatch({ type: "GetBook", payload: resp.data });
                    console.log("event that was fetched: ",resp.data);
                    message.success("Fetched event successfully");
                    return resp.data;
                } else {
                    // Handle case when response data is empty
                }
            });
        } catch (error) {
            console.log("Error");
            message.error("Event not fetched");
        }
    }
    
    const GetAllBooks = async () => {
        try {

           return  await getData('/Event/GetAll').then((res) => {
                if (res) {
                    dispatch({ type: "GetAllBooks", payload: res });

                    message.success("Fetched all events succesfully");
                    return res;

                } else {

                    return []
                }
            })

        } catch (error) {
            console.log("Error");
            message.error("Books not fetched");
        }
    }

    return (
        <EventStateContext.Provider value={state}>
            <EventActionContext.Provider value={{ AddEvent }}>
                {children}
            </EventActionContext.Provider>
        </EventStateContext.Provider>
    );
}
const useEventState = () => {
    const context = useContext(EventStateContext);
    if (!context) {
        throw new Error('useEventState must be used within an EventProvider');
    }
    return context;
};
const useEventActions = () => {
    const context = useContext(EventActionContext);
    if (!context) {
        throw new Error('useEventState must be used within an EventProvider');
    }
    return context;
};

export { EventProvider, useEventState, useEventActions };