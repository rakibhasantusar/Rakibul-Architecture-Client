import React from 'react';
import { FaPen } from 'react-icons/fa';

const ReviewDetail = ({ review }) => {
    const { userName, message, serviceName } = review
    return (
        <tr>
            <th>
                <label>
                    <div className="mask mask-square w-24 h-24">
                        <img src={review?.userPhoto} alt="photo reviewer" />
                    </div>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">

                    </div>
                    <div>
                        <div className="font-bold">{userName}</div>
                        <div className="text-sm opacity-50"></div>
                    </div>
                </div>
            </td>
            <td>
                <br />
                <span className="">{message}</span>
            </td>
            <td>{serviceName}</td>
            <td>
                <button>
                    <FaPen />
                </button>
            </td>
            <th>
                <button>
                    X
                </button>
            </th>
        </tr>
    );
};

export default ReviewDetail;