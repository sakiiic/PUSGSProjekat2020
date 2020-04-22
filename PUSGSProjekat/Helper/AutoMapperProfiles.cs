using AutoMapper;
using PUSGSProjekat.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PUSGSProjekat.Helper
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<RegisterDTO, Korisnik>()
                .ForPath(dest => dest.Address.City,
                opt => { opt.MapFrom(src => src.City); })
                .ForPath(dest => dest.Address.Number,
                opt => { opt.MapFrom(src => src.Number); })
                .ForPath(dest => dest.Address.Street,
                opt => { opt.MapFrom(src => src.Street); });
            CreateMap<Korisnik, UserForDisplayDTO>()
                .ForMember(dest => dest.City,
                    opt => { opt.MapFrom(src => src.Address.City); })
                .ForMember(dest => dest.Street,
                    opt => { opt.MapFrom(src => src.Address.Street); })
                .ForMember(dest => dest.Number,
                    opt => { opt.MapFrom(src => src.Address.Number); });
            CreateMap<UserForUpdateDTO, Korisnik>()
                .ForPath(dest => dest.Address.City,
                    opt => { opt.MapFrom(src => src.City); })
                .ForPath(dest => dest.Address.Number,
                    opt => { opt.MapFrom(src => src.Number); })
                .ForPath(dest => dest.Address.Street,
                    opt => { opt.MapFrom(src => src.Street); });
        }
    }
}
