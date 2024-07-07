import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useCart = () => {
    const { user } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure();
    const { refetch, data: booking = [] } = useQuery({
        queryKey: ['booking', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/bookings?email=${user.email}`);
            return res.data;
        },
        enabled: !!user?.email
    })
    return [booking, refetch]
};

export default useCart;
